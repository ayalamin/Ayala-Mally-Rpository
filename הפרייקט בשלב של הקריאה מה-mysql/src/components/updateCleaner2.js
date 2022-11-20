import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function UpdateCleaners(props) {
    const navigate = useNavigate();
    async function updateHelper() {
        try {
            let data;
            const formData = new FormData();
            const fileField = document.querySelector('input[type="file"]');

            formData.append('username', 'abc123');
            formData.append('avatar', fileField.files[0]);///////???

            fetch('https://example.com/profile/avatar', {
                method: 'PUT',
                body: formData
            })
            data = await data.json();
            console.log(data);
        }
        catch (err) {
            alert(err);
        }

    }
    return (
        <>
        
        </>
    );
}


