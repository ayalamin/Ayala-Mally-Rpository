import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function HomeCleaners(props) {
    let current = JSON.parse(localStorage.getItem('current_user'));
    const navigate = useNavigate();

    // async function GetCurrent() {
    //     setCurrent(JSON.parse(localStorage.getItem('current_user')));
    // }

    // useEffect(() => {
    //     GetCurrent();
    // }, [])

    async function ExitThePool() {
        debugger
        await fetch(`http://localhost:2024/cleaner/${current.id}`,
            { method: `DELETE` }
        );
    }

    // async function profile() {
    //     navigate('/profileCleaner');
    // }

    async function pageRouting(choice) {
        if (choice == "logOut") {
            navigate("/logout");
        }
        else if (choice == "Orders") {
            navigate(`/${current.name}/ordersCleaner`);
        }
        else if (choice == "profile") {
            navigate('/profileCleaner');
        }
        // else if (choice == "sale") {

        // }
    }
    return (
        <>
            <h1>home-cleaners</h1>
            <button className="buttonHomeUser" value="ExitThePool" onClick={() => ExitThePool()} >Exit the pool</button>
            <button className="buttonHomeUser" value="profile" onClick={(e) => pageRouting(e.target.value)}>profile</button>
            <button className="buttonHomeUser" value="Orders" onClick={(e) => pageRouting(e.target.value)}>Orders</button>
            {/* <button className="buttonHomeUser" value = "sale" onClick={(e) => pageRouting(e.target.value)} >add me to sale</button> */}
            <button className="buttonHomeUser" value="logOut" onClick={(e) => pageRouting(e.target.value)} >logOut</button>
            <button className="buttonHomeUser">updata my details</button>
        </>
    );
}