import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes, NavLink } from 'react-router-dom';
import CleanerPage from './cleanerPage';
import Nav from './nav'
import Footer from './footer'
import Popup from './popup'
import HomeUser from './homeUsers'
import HomeComponent from './homeComponent'
import Img1 from '../img/4.webp'
import Img2 from '../img/10.jpg'
import '../Css/home.css'
import About from './about';

export default function Home() {
    // const [timedPopup, setTimedPopup] = useState(false);
    const navigate = useNavigate();
    const [myData, setMyData] = useState([]);




    return (
        <>
            <Nav></Nav>
            <div className="home">
                <h1>.</h1>
                <br></br>
                <h1>.</h1>
                <br></br>
                <h1>.</h1>
                <br></br>
                <h1 style={{ marginLeft: '80%',marginBottom:"30%", color: 'black' }}>everything is possible be sure</h1>
                <br></br>
                <h1>.</h1>
                <br></br>
                <h1>.</h1>
                <br></br>
                <h1>.</h1>
                <br></br>
                <h1>.</h1>
                <br></br>
                <h1>.</h1>
                <br></br>
            </div>
            <a><div id="home" style={{ scrollBehavior: 'smooth' }}>
                <HomeComponent ifEnter={false}></HomeComponent>
            </div></a>
            <a><div id="about" style={{ scrollBehavior: 'smooth' }}>
                <About></About>
            </div></a>
            <Footer></Footer>
        </>

    );
}


