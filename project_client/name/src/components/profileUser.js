import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Footer from './footer'
import NavUser from './navUser'
import '../Css/profile.css'
import profile from '../img/profile.webp'


export default function ProfileUser() {
    const navigate = useNavigate();
    const [current,setCurrent] = useState({});
   
    async function updateUser() {
        navigate('/updateUser');
    }

    useEffect(()=>{
        setCurrent( JSON.parse(localStorage.getItem('current_user')));
    },[])
    
    return (
        <>
           <NavUser></NavUser>
           
            <div style={{display:'block'}}>
            <div className="profilePicture">
                    <div className="cleanerProfile">
                        <h1>name: {current.name}</h1>
                        <h1>password: {current.password}</h1>
                        <h1>adress {current.adress}</h1>
                        <h1>building-number: {current.buildingNumber}</h1>
                        </div>
                    <img className="picture" src={profile}></img>
                    
            <button className="buttonHomeUser" onClick={() => updateUser()}>updata my details</button>
            </div>
            </div>
            <Footer></Footer>
        </>
    );
}