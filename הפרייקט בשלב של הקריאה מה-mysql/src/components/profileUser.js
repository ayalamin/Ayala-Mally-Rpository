import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function ProfileUser() {
    const navigate = useNavigate();
    const [current,setCurrent] = useState({});
    ///////////////////////////////////////////////////////
   
    async function updateUser() {
        navigate('/updateUser');
    }

    useEffect(()=>{
        setCurrent( JSON.parse(localStorage.getItem('current_user')));
    },[])
    
    return (
        <>
            <h1>profile-user</h1>
           
                    <div className="cleaner">
                        <h1>name: {current.name}</h1>
                        <h1>password: {current.password}</h1>
                        <h1>email: {current.alert}</h1>
                        <h1>adress {current.adress}</h1>
                        <h1>building-number: {current.buildingNumber}</h1>
                    </div>
            <button className="buttonHomeUser" onClick={() => updateUser()}>updata my details</button>

        </>
    );
}