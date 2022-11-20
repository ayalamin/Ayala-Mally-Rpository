import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import HomeUser from './homeUsers';
import '../Css/find.css'
import Footer from './footer'
import NavUser from './navUser'
import '../Css/login.css'

export default function FindCleaner() {

    const navigate = useNavigate();
    const [city, setCity] = useState();
    const [expertise, setExpertise] = useState();
    const [religion, setReligion] = useState();
    const [gender, setGender] = useState();

    const [price, setPrice] = useState('1000');
    const [myData, setmyData] = useState([]);
    const [current, setCurrent] = useState({});
    const [optionCity, setOptionCity] = useState('');
    const [optionsReligion, setOptionsReligion] = useState('');
    const [optionsGender, setOptionsGender] = useState('');
    const [optionsExpertise, setOptionsExpertise] = useState('');
    // let arr_tguvot = [];


    async function getData() {
        let result = await fetch("http://localhost:2024/user/sign");
        result = await result.json();
        if (result) {
            setOptionCity(result[0].map(City => <option value={City.id} key={City.name}>{City.name}</option>));
            setOptionsGender(result[1].map(Gender => <option value={Gender.id} key={Gender.name}>{Gender.name}</option>));
            setOptionsReligion(result[2].map((Religion) => <option value={Religion.id} key={Religion.name}>{Religion.name}</option>));
            setOptionsExpertise(result[3].map((expertise) => <option value={expertise.id} key={expertise.name}>{expertise.name}</option>));
        }
    }

    useEffect(() => {
        setCurrent(JSON.parse(localStorage.getItem('current_user')));
        getData();
    }, [])

    async function find(event) {
        debugger
        event.preventDefault();


        let data;
        data = await fetch(`http://localhost:2024/cleaner/${city}/${expertise}/${religion}/${gender}/${price}`);
        data = await data.json();
        setmyData(data);
        console.log(myData)
        console.log(data)


        let finds = data.length;
        let id = current.id;
        const user = { id, city, expertise, religion, gender, price, finds };
        ///
        let data1 = await fetch(`http://localhost:2024/cleaner/${id}`);
        data1 = await data1.json();
        console.log("data in prefere");
        console.log(data1);
        debugger
        if (data1.length == 0) {
            await fetch("http://localhost:2024/cleaner/prefer", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
                mode: 'cors',
            })
        }
        else {

            await fetch("http://localhost:2024/cleaner/prefer", {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
                mode: 'cors',
            })
        }


    }

    function goToCleanerPage(item) {//await???
        debugger
        window.localStorage.setItem('current_helper', JSON.stringify(item));
        navigate(`/cleanerPage`);

    }

    return (

        <>
            <NavUser></NavUser>

            <h1 style={{ marginTop: '3%' }}>there are {myData.length} matches</h1>

            <div className="containHelpers">{myData.map((item) => {
                return (
                    <form className="cleaner" onSubmit={(event) => goToCleanerPage(item)}>
                        <div  >
                            <h3>Name: {item.name}</h3>
                            <h3>City: {item.city}</h3>
                            <h3>Price: {item.price}</h3>
                            <h3>Religion: {item.religion}</h3>
                            <h3>Gender: {item.gender}</h3>
                        </div>
                        <input type="submit" value="click"></input>
                    </form>
                )
            }
            )}</div>
            <div className="boxFind" >
                <h1 style={{ color: 'black' }}></h1>
                <form className="findBlock" onSubmit={(event) => find(event)}>
                    <div style={{ marginTop: "3%" ,marginLeft: "28%"}}>

                        <select className="input" style={{ width: '231px', color: 'grey' }} onChange={(event) => setCity(event.target.value)} >
                            <option>choose a City</option>
                            {optionCity}
                        </select>
                        <br></br>
                        <select className="input" style={{ width: '231px', color: 'grey' }} onChange={(event) => setGender(event.target.value)} >
                            <option>choose a Gender</option>
                            {optionsGender}
                        </select>
                        <br></br>
                        <select className="input" style={{ width: '231px', color: 'grey' }} onChange={(event) => setReligion(event.target.value)}>
                            <option>choose a Religion</option>
                            {optionsReligion}
                        </select>
                        <br></br>
                        <select className="input" style={{ width: '231px', color: 'grey' }} onChange={(event) => setExpertise(event.target.value)}>
                            <option>choose a expertise</option>
                            {optionsExpertise}
                        </select>
                        <br></br>
                        <input className="input" placeholder="choose price" onChange={(event) => setPrice(event.target.value)} />
                        <br></br>
                        <input className="button" type="submit" value="find" />
                    </div>
                </form>
                <h1 style={{ marginTop: '12%' }} className="h1">please fill all the categories to find the best cleaner for you...</h1>
            </div>




            <Footer></Footer>
        </>

    );
}



