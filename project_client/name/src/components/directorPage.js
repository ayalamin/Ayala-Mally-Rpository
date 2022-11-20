import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes, NavLink } from 'react-router-dom';
import Img2 from '../img/10.jpg'
import '../Css/home.css'
import Nav from './nav'

export default function DirectorPage() {
    debugger
    const [myData, setMyData] = useState([]);

    async function getBills() {
        try {
            let data;
            data = await fetch(`http://localhost:2024/director/bills`);
            data = await data.json();
            setMyData(data);
        }
        catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        getBills();
    })
    return (
        <>
            <div className="containHelpers" >{myData.map((item) => {
                return (
                    <>
                        <div className="boxCleaner">
                            <h3>date: {item.date}</h3>
                            <h3>pay: {item.price}</h3>
                            <h3>bunk Number is: {item.bunkNum}</h3>
                            <h3>branch Number is: {item.branchNum}</h3>
                            <h3>bunk Acount is: {item.bunkAcount}</h3>
                        </div>
                    </>
                )
            })}
            </div>
        </>

    );
}


