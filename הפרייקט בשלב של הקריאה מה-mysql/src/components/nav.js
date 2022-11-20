import React from "react";
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function Nav(props) {
    return (
        <nav >
            <NavLink className="nav-link" exact to="/">logIn</NavLink>

        </nav>
    );
}