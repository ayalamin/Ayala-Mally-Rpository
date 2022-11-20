import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import UpdateCleaner from './updateCleaner';

export default function ProfileCleaner(props) {
    const navigate = useNavigate();
    const [current_user,setCurrent_user] = useState({});

    async function updateHelper() {

        navigate('/updateCleaner');
    }

    useEffect(()=>{
        setCurrent_user( JSON.parse(localStorage.getItem('current_user')));
    },[])

    
    return (
        <>
            <h1>profile-cleaners</h1>
           
                    <div className="cleaner">
                        <h1>name: {current_user.username}</h1>
                        <h1>password: {current_user.password}</h1>
                        <h1>city: {current_user.city}</h1>
                        <h1>expertise {current_user.expertise}</h1>
                        <h1>religion: {current_user.religion}</h1>
                        <h1>gender: {current_user.gender}</h1>
                        <h1>price: {current_user.price}</h1>
                        <h1>bankNum: {current_user.bunkNum}</h1>
                        <h1>branchNum: {current_user.branchNum}</h1>
                        <h1>bankAcount: {current_user.bunkAcount}</h1>
                    </div>
            <button className="buttonHomeUser" onClick={() => updateHelper()}>updata my details</button>

        </>
    );
}