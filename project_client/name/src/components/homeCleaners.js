import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NavCleaner from './navCleaner'
import Footer from './footer'

export default function HomeCleaners() {
    debugger
    let current = JSON.parse(localStorage.getItem('current_user'));
    const navigate = useNavigate();
    const [time, setTime] = useState();

    const [data1, setData1] = useState();
    const [data2, setData2] = useState();
    const [data3, setData3] = useState();
    const [day, setDay] = useState();
    const [flag, setFlag] = useState(false);
    let id = current.id;
    let day1;
    let data;

    async function scedule() {
        try {
            data = await fetch(`http://localhost:2024/order/scedule/${current.id}`);
            data = await data.json();

            //setData1(data[0]);

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


    useEffect( () => {
         scedule();
    }, [,flag])

    // 0

    async function ordering(time, day) {
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


    return (
        <>
            <NavCleaner></NavCleaner>

            <div className="scedule">


                <h1>sunday monday tuesday wednesday thursday friday</h1>
                <div className="containHelpers">{data1}</div>
                <div className="containHelpers">{data2}</div>
                <div className="containHelpers">{data3}</div>

                {/* <div className="containHelpers">{Object.values(data1).map((value,index) => {
                    
                    if (value == 't') {
                        return (
                            <button key={index} className="true" >morning</button>
                        )
                    }
                    else if (value == 'f')  {
                        return (
                            <button key={index} className="false" onClick={(e)=>ordering(2,index)}> morning</button>
                        )
                    }
                })}</div> */}

                {/* <div className="containHelpers">{Object.values(data2).map((value,index) => {
                   
                    if (value == 't') {
                        return (
                            <button key={index} className="true" >afternoon</button>
                        )
                    }
                    else if (value == 'f') {
                        return (
                            <button key={index} className="false" onClick={(e)=>ordering(3,index)}> afternoon</button>
                        )
                    }
                })}</div>
    
                <div className="containHelpers">{Object.values(data3).map((value,index) => {
                    
                    if (value == 't') {
                        return (
                            <button key={index} className="true" >evening</button>
                        )
                    }
                    else if (value == 'f') {
                        return (
                            <button key={index} className="false" onClick={(e)=>ordering(4,index)}> evening</button>
                        )
                    }
                })} 
                </div> */}
            </div>
            {/* img & discrption */}
            <h1>hiiii</h1>
            <Footer></Footer>
        </>
    );
}