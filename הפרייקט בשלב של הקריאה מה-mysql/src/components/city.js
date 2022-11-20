import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function City() {
    const navigate = useNavigate();

        async function getHelpers(area) {
        try {
            let data = await fetch(`http://localhost:2008/city/${area}`);
            data = await data.json();
            console.log(data);

            if (!data) {
                throw ("no helpers in the city");
            }
            else {
                console.log(data);
                
            }
        }
        catch (err) {
            alert(err);
        }
    }

    return (

        <>
           <button onClick={(e)=>getHelpers("ירושלים")}>ירושלים</button>
        </>
      
    );
}


