import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../Css/findCleaners.css'

export default function FindCleaner(props) {
   
    const navigate = useNavigate();
    const [city, setCity] = useState('');
    const [price, setPrice] = useState('1000');
    const [numOfTime, setNumOfTime] = useState('2');
    const [gender, setGender] = useState('male');
    const [myData, setmyData] = useState([]);

    async function find(event) {
        event.preventDefault();
        const current_user=localStorage.getItem('current_user');
        //setCity(current_user.city)
        let data;
        data = await fetch(`http://localhost:2024/cleaner/${city}/${price}/${numOfTime}/${gender}`);
        data = await data.json();
        setmyData(data)
        console.log(data);
    }
    function goToCleanerPage(){
        
        navigate(`/cleanerPage`);
    }
    return (

        <>
            <form onSubmit={(event) => find(event)}>
                <div style={{ marginTop: "100px" }}>
                    <input className="input"  placeholder=" city" onChange={(event) => setCity(event.target.value)} />
                    <br></br>
                    <input className="input"  placeholder="price" onChange={(event) => setPrice(event.target.value)} />
                    <br></br>
                    <input className="input"  placeholder="How many days a week" onChange={(event) => setNumOfTime(event.target.value)} />
                    
                    <br></br>
                    <input className="input"   placeholder="Enter your gender"  onChange={(event) => setGender(event.target.value)} />
                    <br></br>
                    <input className="button" type="submit" value="find" />
                </div>
            </form>
            <h1>there are {myData.length} matches</h1>
            <div className="containHelpers">{myData.map((item) => {
                return (
                    <form className="cleaner"onSubmit={(event) => goToCleanerPage(event)}>
                    <div  >
                        <h3>Name: {item.name}</h3>
                        <h3>City: {item.city}</h3>
                        <h3>Price: {item.price}</h3>
                        <h3>Times: {item.timesInWeek}</h3>
                        <h3>Religion: {item.religion}</h3>
                        <h3>Gender: {item.gender}</h3>
                        <input type="submit" value="click"></input>
                    </div>
                    </form>
                )
            }
            )}</div>
        </>

    );
}


