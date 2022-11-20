import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../Css/findCleaners.css'

export default function FindCleaner() {

    const navigate = useNavigate();
    const [city, setCity] = useState();
    const [expertise, setExpertise] = useState();
    const [religion, setReligion] = useState();
    const [gender, setGender] = useState();
    const [price, setPrice] = useState('1000');
    const [myData, setmyData] = useState([]);
    const [current,setCurrent] = useState({});
   
    useEffect (()=>{
        setCurrent( JSON.parse(localStorage.getItem('current_user')));
    },[])

    async function find(event) {
        event.preventDefault();
        
    
        let data;
        data = await fetch(`http://localhost:2024/cleaner/${city}/${expertise}/${religion}/${gender}/${price}`);
        data = await data.json();
        setmyData(data);
        console.log(myData)
        console.log(data)

        ///רק בגלל שלא עובד ה-current_user
        let finds = data.length;
        let a=1;
       const user = { a, city, expertise, religion, gender, price ,finds};
        ///
        let data1 = await fetch(`http://localhost:2024/cleaner/prefer/`);
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


