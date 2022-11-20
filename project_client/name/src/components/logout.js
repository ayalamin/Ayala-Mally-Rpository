import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

export default function LogOut() {
    let nevigate = useNavigate();
    localStorage.removeItem("current_user");

    useEffect(() => {
        nevigate('/')
    }, []);
    
    return (
        <div> </div>
    );
}