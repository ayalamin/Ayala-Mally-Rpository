import React from "react";
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../Css/nav.css';
import Logo from '../img/8.jpg';


export default function Nav(props) {
    const navigate = useNavigate();

    function goToCleanerPage(person) {
        window.localStorage.setItem('current_order', JSON.stringify(person));
        navigate(`/cleanerPage`);
    }

    function pageRouting(choice) {
        console.log(choice)
        if (choice === "User") {
            navigate("/signInUser");
        }
        else if (choice === "Cleaner") {
            navigate("/signInCleaners");
        }
        else {
            navigate("/login");
        }
    }


    return (
        <nav >
            <ul>
            <img src={Logo} style={{width:'100px',height:'100px',borderRadius:'45px',float:'left'}}></img>
                <li><a style={{marginLeft:'150%'}} class="active" href='/#home'>home</a></li>
                 <li><a style={{marginLeft:'150%'}}  class="active" href="#about" >about</a></li>
               <li style={{ float: "right" }}> <select  class="active" className="buttonNav" value="sign in" onChange={(e) => pageRouting(e.target.value)}>
                <option>sign in</option>
                <option ><a href='/user'>User</a></option>
                <option ><a href='/cleaner'>Cleaner</a></option>
            </select></li>
                <li style={{ float: "right" }}><a class="active" href='/login'>log in</a></li>
            </ul>
            <h1 style={{ color: 'black' }}></h1>
        </nav>
    );
}







