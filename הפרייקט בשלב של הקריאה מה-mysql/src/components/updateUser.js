import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function UpdateUser(props) {  
    let current = JSON.parse(localStorage.getItem('current_user'));
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [adress, setAdress] = useState('');
    const [building, setBuilding] = useState('');
    const navigate = useNavigate();

    function setItem()
    {
        setUsername(current.name);
        setPassword(current.password);
        setEmail(current.alert);
        setAdress(current.adress);
        setBuilding(current.buildingNumber);
    }


    useEffect(() => {
        setItem()
    }, [])
   
    async function updateHelper(event) {
        debugger
        event.preventDefault();

        await fetch(`http://localhost:2024/user/${current.id}/${username}/${password}/${email}/${adress}/${building}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            //  body: JSON.stringify(user) ,
            mode: 'cors',
        })
}
        return (
            <>
                <h1>update-user</h1>
                <form onSubmit={(event) => updateHelper(event)}>
                <div style={{ marginTop: "100px" }}>
                   {
                }
                     <input className="input"   placeholder={current.name} onChange={(event) => setUsername(event.target.value)} />
                    <br></br>
                    <input className="input"   placeholder={current.password} type="password" onChange={(event) => setPassword(event.target.value)} />
                    <br></br>
                    <input className="input"   placeholder={current.alert}  onChange={(event) => setEmail(event.target.value)} />
                    <br></br>
                    <input className="input"   placeholder={current.adress} onChange={(event) => setAdress(event.target.value)} />
                    <br></br>
                    <input className="input"   placeholder={current.buildingNumber}  onChange={(event) => setBuilding(event.target.value)} />
                    <br></br>
                    <input className="button"  type="submit" value="update" />
                </div>
            </form>
            </>
        );
    }
