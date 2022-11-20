import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes, NavLink } from 'react-router-dom';
import SingelOrder from './singelOrder';
import '../Css/findCleaners.css'

export default function OrdersUser() {
    
    const navigate = useNavigate();
    const [myData, setMyData] = useState([]);

    async function getOrders() {
        
        try {

            let data = await fetch(`http://localhost:2024/order/user/${5}`);
            data = await data.json();
            console.log(data);
            if (!data) {

                throw ("no helpers in the city");
            }
            else{
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
            <h1>my orders</h1>
            <div className="containHelpers">{myData.map((item) => {
                return (
                    <SingelOrder item1={item}></SingelOrder>
                //     <div className="cleaner">
                //         <h1> date of order:         {item.date}</h1>
                //         <h1>name of cleaner:       {item.name}</h1>
                //         <h1> expertise of cleaner: {item.expertise}</h1>
                //         <h1>religion of cleaner:   {item.religion}</h1>
                //         <h1>gender of cleaner:     {item.gender}</h1>
                //         <h1>price of cleaner:      {item.price}</h1>
                //         <h1>amout of order:        {item.times}</h1>
                //         <h1>endPrice:              {item.endPrice}</h1>
                //     </div>
                // 
                )
            }
)}</div>
        </>

    );
}



