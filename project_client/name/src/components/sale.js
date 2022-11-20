import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes, NavLink } from 'react-router-dom';
import NavUser from './navUser'
import Footer from './footer'
import '../Css/home.css'

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
 
    function goToCleanerPage(person) {
        window.localStorage.setItem('current_helper', JSON.stringify(person));
        navigate(`/cleanerPage`);
    }

    return (
        <>
          <NavUser></NavUser>
            <div className="containHelpers">{myData.map((item) => {
                return (
                    <form className="cleaner" onSubmit={(event) => goToCleanerPage(item)}>
                    <div >
                        <h3>{item.name}</h3>
                        <h3>{item.city}</h3>
                        <h3>{item.price}</h3>
                        <h3>{item.numOfTime}</h3>
                        <h3>{item.religion}</h3>
                        <h3>{item.gender}</h3>
                        <input className="order" type="submit" value="order"></input>
                    </div>
                    </form>
                )
            }
            )}</div>
              <Footer></Footer>

        </>

    );
}


