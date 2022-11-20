import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import NavUser from './navUser'
import Footer from './footer'
export default function CleanerPage() {
    const navigate = useNavigate();
    let currentHelper = JSON.parse(localStorage.getItem('current_helper'));
    let current = JSON.parse(localStorage.getItem('current_user'));
    const [response, setResponse] = useState([]);
    const [rate, setRate] = useState(0);
    const [useScorse, setUseScorse] = useState(0);
    const [time, setTime] = useState(0);
    const [data1, setData1] = useState();
    const [data2, setData2] = useState();
    const [data3, setData3] = useState();
    const [day, setDay] = useState("");
    const [flag, setFlag] = useState(false);
    const [flag2, setFlag2] = useState(true);

    let day1;
    let id = currentHelper.id;
    let data;

  

    async function getRes() {
        let data;
        data = await fetch(`http://localhost:2024/cleaner/${currentHelper.id}/${currentHelper.name}/${currentHelper.password}`);
        data = await data.json();
        setResponse(data[0].map((res) => <ul><li>{res.Text}</li></ul>));
        console.log("this is response: " + response)
        if (data[1][0]) {
            setRate(data[1][0].rate);
            console.log("this is rate: " + rate)
        }
    }

    async function scedule() {
        try {
            data = await fetch(`http://localhost:2024/order/scedule/${currentHelper.id}`);
            data = await data.json();
            setData1(Object.values(data[0]).map((value, index) => {
                if (value == 't') {

                    return (
                        <button key={index} className="true" >morning</button>
                    )
                }
                else if (value == 'f') {
                    return (
                        <button key={index} className="false" onClick={(e) => ordering(1, index)}> morning</button>
                    )
                }
            }));


            setData2(Object.values(data[1]).map((value, index) => {
                if (value == 't') {
                    return (
                        <button key={index} className="true" >afternoon</button>
                    )
                }
                else if (value == 'f') {
                    return (
                        <button key={index} className="false" onClick={(e) => ordering(2, index)}> afternoon</button>
                    )
                }
            }));


            setData3(Object.values(data[2]).map((value, index) => {
                if (value == 't') {
                    return (
                        <button key={index} className="true" >evening</button>
                    )
                }
                else if (value == 'f') {
                    return (
                        <button key={index} className="false" onClick={(e) => ordering(3, index)}> evening</button>
                    )
                }
            }));


        }
        catch (err) {
            alert(err);
        }
    }


    useEffect(() => {
        getRes();
        scedule();
    }, [, flag])


    async function ordering(time, day) {
        if(flag2){
            setFlag2(false)
            debugger
            setTime(time);
            if (day === 3) {
                debugger
                day1 = 'sunday'
            }
            else if (day === 4) {
                day1 = 'monday'
            }
            else if (day === 5) {
                day1 = 'tuesday'
            }
            else if (day === 6) {
                day1 = 'wednesday'
            }
            else if (day === 7) {
                day1 = 'thursday'
            }
            else if (day === 8) {
                day1 = 'friday'
            }
            setDay(day1);
            debugger
            setFlag(true)
            debugger
            let person = { time, day1, id }
            await fetch(`http://localhost:2024/order/changeScedual`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(person),
                mode: 'cors',
            })
    
    
        }
       
    }
    async function finishOrder() {
        debugger
        let userId = current.id;
        let item = currentHelper;
        let user = { item, userId ,useScorse,time,day}
        try {
            let result = await fetch("http://localhost:2024/order/finishOrder", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
                mode: 'cors',
            })
            console.log(result);
        }
        catch (e) {
            console.log("this erroe:" + e)
        }
        let newScors = 0;
        if (!useScorse) {
            newScors = current.scors + item.price * 0.1;
        }
        else{
            newScors = current.scors - useScorse; 
        }

        let user2 = { newScors, userId };
        //update scors in the user
        let result1;
        try {
            result1 = await fetch("http://localhost:2024/order/scors", {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user2),
                mode: 'cors',
            });
            console.log(result1);
        }
        catch (e) {
            console.log("this erroe:" + e)
        }
        //get updated user
        debugger
        //put updated user in the localStorage
        // alert("Your order has been received in the system, thank you"); 
        let name = current.name;
        let email = current.email;
        let password = current.password;
        let adress = current.adress;
        let buildingNumber = current.buildingNumber;
        let scors = newScors;
        let alert = current.alert;
        let id = userId;
        user = { adress, alert, buildingNumber, email, id, name, password, scors }
        window.localStorage.setItem('current_user', JSON.stringify(user));
        debugger
        navigate('/homeUser')
    }


    function toUpdateScors()
    {
        if(currentHelper.price > current.scors || currentHelper.price === current.scors){
            setUseScorse(current.scors)
        }
        else{
            setUseScorse(currentHelper.price);
        }
    }

    return (
        <>
            <NavUser></NavUser>

            <div  >
                <h3>Name: {currentHelper.name}</h3>
                <h3>City: {currentHelper.city}</h3>
                <h3>Price: {currentHelper.price}</h3>
                <h3>Religion: {currentHelper.religion}</h3>
                <h3>Gender: {currentHelper.gender}</h3>
                <h3>rate: {rate}</h3>
                <h3>responses: </h3>
                <ul> {response}</ul>


                <h1>sunday monday tuesday wednesday thursday friday</h1>
                <div className="containHelpers">{data1}</div>
                <div className="containHelpers">{data2}</div>
                <div className="containHelpers">{data3}</div>
                <button value="scors" onClick={() => toUpdateScors()}>use scors</button>
                <button value="order" onClick={() => finishOrder()}>Completion of an order</button>
            </div>
            <Footer></Footer>
        </>
    );
}


