import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes, NavLink, Link } from 'react-router-dom';
import '../Css/nav.css'
import user from '../img/user.png'
import search from '../img/search.png'
import order from '../img/shopping-cart.png'
import HomeUser from "./homeUsers"
import Logo from '../img/8.jpg';

export default function NavUser() {
    let navigate = useNavigate();
    let current = JSON.parse(localStorage.getItem('current_user'))

    function pageRouting(choice) {
        if (choice == "logOut") {
            navigate("/logout");
        }
        else if (choice == "Orders") {
            navigate(`/ordersUser`);
        }
        else if(choice == "findCleaner")
        {
            navigate(`/findCleaner`);
        }  
        else if(choice == "sale")
        {
            navigate(`/sale`);
        }
    }

    return (
            <nav >
            {/* <NavLink className="nav-link" exact to="/">logIn</NavLink> */}
            <ul>
            <img src={Logo} style={{width:'100px',height:'100px',borderRadius:'45px',float:'left'}}></img>
                <li style={{border:'0.5px solid grey',padding:'1%',borderRadius:'5px',margin:'20px',}}><h6>hi {current.name} you <br></br>have {current.scors} scors</h6></li>
                <li><a href='/sale'>sale</a></li>
                <li><a href='/profileUser'>profile</a></li>
                <li><a  href='/ordersUser'>orderd</a></li>
                <li><a  href='/findCleaner'>search your cleaner</a></li>
                <li><a  href='/homeUser'>home</a></li>
                <li style={{ float: "right" }}><a class="active" href='/logout'>log out</a></li> 
            </ul>
            <h1 style={{ color: 'black' }}></h1>
        </nav>
        
    )
}