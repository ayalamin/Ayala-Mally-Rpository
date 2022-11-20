import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes, NavLink } from 'react-router-dom';
import '../Css/findCleaners.css'

export default function Sale() {
    
    const navigate = useNavigate();
    const [myData, setMyData] = useState([]);
    async function GetTenCleaners() {
        
        try {

            let data = await fetch(`http://localhost:2024/cleaner/sale`);
            data = await data.json();
            console.log(data);
            setMyData(data);
            if (!data) {

                throw ("no helpers in the city");
            }
        }
        catch (err) {
            alert(err);
        }
    }
    useEffect(() => {
        GetTenCleaners();
    }, [])



 

  


    return (
        <>
            <h1>מנקות במבצע</h1>
            <div className="containHelpers">{myData.map((item) => {
                return (
                    <div className="cleaner">
                        <h1>{item.name}</h1>
                        <h1>{item.city}</h1>
                        <h1>{item.price}</h1>
                        <h1>{item.numOfTime}</h1>
                        <h1>{item.religion}</h1>
                        <h1>{item.gender}</h1>
                    </div>
                )
            }
            )}</div>
        </>

    );
}


