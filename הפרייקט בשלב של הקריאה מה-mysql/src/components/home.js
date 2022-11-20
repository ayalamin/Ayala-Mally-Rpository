import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes, NavLink } from 'react-router-dom';
import '../Css/findCleaners.css'

export default function Home() {
    
    const navigate = useNavigate();
    const [myData, setMyData] = useState([]);

    async function GetTenCleaners() {
        try {

            let data = await fetch(`http://localhost:2024/cleaner/ten`);
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

   
    // let current_user = localStorage.getItem('current_user');
   

    function check() {
        alert("You need to sign in in order to use this feature") 
    }

    function pageRouting(choice) {
        console.log(choice)
        if (choice === "User") {
            navigate("/signInUser");
        }
        else if (choice === "Cleaner") {
            navigate("/signInCleaners");
        }
        else {
            navigate("/login");
        }


    }


    return (
        <>
            <h1>home</h1>

            {/////////////////////////////////////////////////////////////////////////////////////////
                <div>
                    <button className="buttonHomeUser" onClick={() => check()}>sale</button>
                    <button className="buttonHomeUser" onClick={() => check()}>Orders</button>
                    <button className="buttonHomeUser" onClick={() => check()}>find cleaner</button>
                </div>
                //////////////////////////////////////////////////////////////////////////////////////
            }
            <input className="button" type="submit" value="log in" onClick={(e) => pageRouting(e.target.value)} />
            <select className="button" value="sign in" onChange={(e) => pageRouting(e.target.value)}>
                <option>sign in</option>
                <option >User</option>
                <option >Cleaner</option>
            </select>
           
       
            <h1>מנקות דוגמא</h1>
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


