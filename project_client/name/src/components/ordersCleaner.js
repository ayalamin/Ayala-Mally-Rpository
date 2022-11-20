import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes, NavLink } from 'react-router-dom';
import SingelOrder from './singelOrder';
import NavCleaner from './navCleaner'
import Footer from './footer'

export default function OrdersCleaner() {
    const navigate = useNavigate();
    const [myData, setMyData] = useState([]);

    async function getOrders() {
        let current = JSON.parse(localStorage.getItem('current_user'))
        try {

            let data = await fetch(`http://localhost:2024/order/cleaner/${current.id}`);
            data = await data.json();
            console.log(data);
            if (!data) {

                throw ("no helpers in the city");
            }
            else {
                setMyData(data);
            }
        }
        catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <>
            <NavCleaner></NavCleaner>
            <h1>my orders</h1>
            <div className="containHelpers">{myData.map((item) => {
                return (
                    <div style={{display:"inline"}}>
                    <SingelOrder item1={item}></SingelOrder>
                    </div>
                )
            }
            )}</div>

            <Footer></Footer>
        </>
    );
}

