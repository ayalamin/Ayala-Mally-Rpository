import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../Css/findCleaners.css'

export default function CleanerPage(props) {

   
    async function cleaner(event) {
        event.preventDefault();
        let data;
        data = await fetch(`http://localhost:2024/cleaner/`);
        data = await data.json();
        console.log(data);
    }
    return (

        <>
        
          
        </>

    );
}


