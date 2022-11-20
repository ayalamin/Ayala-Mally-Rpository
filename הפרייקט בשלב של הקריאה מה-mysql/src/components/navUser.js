import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes, NavLink, Link } from 'react-router-dom';

export default function NavBar() {
    let navigate = useNavigate();

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
        <div style={{ marginBottom: "500px" }}>
            <div style={{ display: "flex" }} className="nav">

                <div className="Logo">לוגו</div>
                <div>
                    <h3>hello { localStorage.getItem('current_user').username} yoh have {localStorage.getItem('current_user').scors } scors</h3>
                </div>
                <NavLink activeclassname="active" className="nav-link" to={`/${localStorage.getItem('current_user').username}/about`}>
                    <i className="bi bi-file-person on" >
                        <div >about</div>
                    </i>
                </NavLink>

                <input className="button" type="submit" value="log in" onClick={(e) => pageRouting(e.target.value)} />
                <select className="button" onChange={(e) => pageRouting(e.target.value)}>
                    <option>sign in</option>
                    <option >User</option>
                    <option >Cleaner</option>
                </select>

                <NavLink activeclassname="active" className="nav-link" to={"/homeUser"}>
                    <i className="bi bi-file-person on" >
                        <div >Home</div>
                    </i>
                </NavLink>

            </div>
        </div>
    )
}