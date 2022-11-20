import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import '../Css/city.css'

export default function HomeUser() {
    let current = JSON.parse(localStorage.getItem('current_user'))
    const navigate = useNavigate();
    const [myData, setMyData] = useState([]);
    const [flag, setFlag] = useState(true);
    // const [current, setCurrent] = useState({});


    async function GetTenCleaners() {
        
        try {
           // setCurrent(JSON.parse(localStorage.getItem('current_user')));
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

    async function alert1() {
        try {
            let id = current.id;
            debugger
            let data = await fetch(`http://localhost:2024/user/${id}`);
            data = await data.json();
            if (data[0]) {
                setFlag(false);
                alert(data[0].alert)
            }
            console.log(data)
        }
        catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        if(flag)
        {
            alert1();
        }
        GetTenCleaners();
        return () => {
            console.log("This will be logged on unmount");
          }
    }, [])

    

 
    function pageRouting(choice) {
        if (choice == "logOut") {
            navigate("/logout");
        }
        else if (choice == "Orders") {
            navigate(`/${current.name}/ordersUser`);
        }
        else if(choice == "findCleaner")
        {
            navigate(`/${current.name}/findCleaner`);
        }  
        else if(choice == "sale")
        {
            navigate(`/${current.name}/sale`);
        }
    }

    return (
        <>
            <h1>home-user</h1>
            <div>
             <h6>hello {current.name} <br></br>you have <br></br>{current.scors} scors </h6>
                <button className="buttonHomeUser"  value = "Orders" onClick={(e) => pageRouting(e.target.value)}>Orders</button>
                <button className="buttonHomeUser" value = "logOut" onClick={(e) => pageRouting(e.target.value)} >logOut</button>
                <button className="buttonHomeUser" value = "findCleaner" onClick={(e) => pageRouting(e.target.value)} >findCleaner</button>
                <button className="buttonHomeUser" value = "sale" onClick={(e) => pageRouting(e.target.value)} >sale</button>
            </div>

            <h1>מנקות דוגמא</h1>
            <div className="containHelpers">{myData.map((item) => {
                return (
                    <div className="cleaner">
                        <h1>{item.name}</h1>
                        <h1>{item.city}</h1>
                        <h1>{item.price}</h1>
                        <h1>{item.expertise}</h1>
                        <h1>{item.religion}</h1>
                        <h1>{item.gender}</h1>
                    </div>
                )
            }
            )}</div>
        </>

    );
}


