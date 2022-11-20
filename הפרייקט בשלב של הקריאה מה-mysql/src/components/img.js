import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes, NavLink } from 'react-router-dom';
import image from '../img/1.jpg'

export default function Img(props) {
 


    return (
        <>
            <h1>img</h1>

     
           <img src={image}></img>
       
        </>

    );
}


