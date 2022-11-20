import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function CleanerSelectPage(props) {
    const navigate = useNavigate();
    const [time, setTime] = useState();
    const [day, setDay] = useState();
    ////////useEffect onClick................
    async function getHelpers(time, day,toChange) {
        setTime(time);
        setDay(day);
        await fetch(`http://localhost:2024/cleaner/${time}/${day}/${toChange}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            //  body: JSON.stringify(user) ,
            mode: 'cors',
        })
    }

        const data = [ 11, 10, 10, 10, 10, 10 ,20, 21, 20, 20, 20, 20, 30, 30, 30, 30, 30, 31 ]

    return (
        <>

            <h5>cleaner-schedule</h5>
            <h1>sunday  monday  tuesday  wednesday  thursday  friday</h1>
            {/* <button className="day" onClick={(e, b) => getHelpers(2, "sunday")}>morning</button>
            <button className="day" onClick={(e, b) => getHelpers(2, "monday")}>morning</button>
            <button className="day" onClick={(e, b) => getHelpers(2, "tusday")}>morning</button>
            <button className="day" onClick={(e, b) => getHelpers(2, "wednesday")}>morning</button>
            <button className="day" onClick={(e, b) => getHelpers(2, "thursday")}>morning</button>
            <button className="day" onClick={(e, b) => getHelpers(2, "friday")}>morning</button>
            <br></br>
            <button className="day" onClick={(e, b) => getHelpers(3, "sunday")}>afternoon</button>
            <button className="day" onClick={(e, b) => getHelpers(3, "monday")}>afternoon</button>
            <button className="day" onClick={(e, b) => getHelpers(3, "tusday")}>afternoon</button>
            <button className="day" onClick={(e, b) => getHelpers(3, "wednesday")}>afternoon</button>
            <button className="day" onClick={(e, b) => getHelpers(3, "thursday")}>afternoon</button>
            <button className="day" onClick={(e, b) => getHelpers(3, "friday")}>afternoon</button>
            <br></br>
            <button className="day" onClick={(e, b) => getHelpers(4, "sunday")}>evening</button>
            <button className="day" onClick={(e, b) => getHelpers(4, "monday")}>evening</button>
            <button className="day" onClick={(e, b) => getHelpers(4, "tusday")}>evening</button>
            <button className="day" onClick={(e, b) => getHelpers(4, "wednesday")}>evening</button>
            <button className="day" onClick={(e, b) => getHelpers(4, "thursday")}>evening</button>
            <button className="day" onClick={(e, b) => getHelpers(4, "friday")}>evening</button> */}


            <div className="containHelpers">{data.map((item) => {
                if (item == 11) {
                    return (
                        <button className="true" >morning</button>
                    )
                }
                else if(item == 10){
                    return (
                        <button className="false" onClick={(e, b,c) => getHelpers(2, "sunday",11)}>morning</button>
                    )
                }
                if (item == 21) {
                    return (
                        <button className="true" >afternoon</button>
                    )
                }
                else if(item == 20){
                    return (
                        <button className="false" onClick={(e, b,c) => getHelpers(3, "monday",21)}>afternoon</button>
                    )
                }
                if (item == 31) {
                    return (
                        <button className="true" >evening</button>
                    )
                }
                else if(item  ==30){
                    return (
                        <button className="false" onClick={(e, b,c) => getHelpers(4, "sunday",31)}>evening</button>
                    )
                }
            }
            )
            }
            </div>
        </>

    );
}


