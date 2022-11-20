import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes, NavLink } from 'react-router-dom';
import Img2 from '../img/10.jpg'
import '../Css/home.css'
import Nav from './nav'

export default function About() {
    return (
        <>
            <div className="imgBox">
                <div className="paragragh">
                    <h1>Find a housekeeper easily</h1>
                    <br></br>
                    <p>
                        Need a housekeeper?
                         You have come to the right place!
                          The helpbook website is a reliable and high-quality job board for the home and family,
                           which gives you the best tools for an efficient and quick search for a housekeeper or cleaner.
                            The purpose of the site is to create a pleasant and high-quality
                             meeting that will allow you to easily continue to the next stage of getting to know each other.
                        <br></br>
                        Go on , you will like it!!'.</p>
                </div>
                <div>
                    <img className="img" src={Img2}></img>
                </div>
            </div>
            <br></br>
         
        </>

    );
}


