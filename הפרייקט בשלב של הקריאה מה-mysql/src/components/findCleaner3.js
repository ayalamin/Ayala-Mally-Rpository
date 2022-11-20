import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../Css/findCleaners.css'

export default function FindCleaner(props) {

    const navigate = useNavigate();
    const [city, setCity] = useState();
    const [expertise, setExpertise] = useState();
    const [religion, setReligion] = useState();
    const [gender, setGender] = useState();
    const [price, setPrice] = useState('1000');
    const [myData, setmyData] = useState([]);



    async function find(event) {
        event.preventDefault();
        const current_user = localStorage.getItem('current_user');
        //setCity(current_user.city)
        let data;
        data = await fetch(`http://localhost:2024/cleaner/${city}/${expertise}/${religion}/${gender}/${price}`);
        data = await data.json();
        setmyData(data)

        /////רק בגלל שלא עובד ה-current_user
        let a = 1;
        const user = { /*current_user.id,*/a, city, expertise, religion, gender, price };
        /////
        await fetch("http://localhost:2024/cleaner/prefer", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
            mode: 'cors',
        })
    }
    function goToCleanerPage() {

        navigate(`/cleanerPage`);
    }
    return (

        <>
            <form onSubmit={(event) => find(event)}>
                <div style={{ marginTop: "100px" }}>
                    <input className="input" placeholder="which city" onChange={(event) => setCity(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder="which expertise" onChange={(event) => setExpertise(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder="which religion" onChange={(event) => setReligion(event.target.value)} />

                    <br></br>
                    <input className="input" placeholder="which gender" onChange={(event) => setGender(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder="which price" onChange={(event) => setPrice(event.target.value)} />
                    <br></br>
                    <input className="button" type="submit" value="find" />
                </div>
            </form>
            <h1>there are {myData.length} matches</h1>
            <div className="containHelpers">{myData.map((item) => {
                return (
                    <form className="cleaner" onSubmit={(event) => goToCleanerPage(event)}>
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


