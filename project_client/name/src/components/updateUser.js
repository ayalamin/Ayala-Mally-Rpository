import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NavUser from './navUser'
import Footer from './footer'
import '../Css/update.css'

export default function UpdateUser(props) {
    let current = JSON.parse(localStorage.getItem('current_user'));
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [adress, setAdress] = useState('');
    const [building, setBuilding] = useState('');
    const navigate = useNavigate();

    function setItem() {
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
        let id = current.id;
        let scors = current.scors;
        let alert = current.alert;
        let user = { id, username, email, password, adress, building, scors, alert }
        await fetch(`http://localhost:2024/user/${current.id}/${username}/${password}/${email}/${adress}/${building}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
            mode: 'cors',
        });
        let name = username;
        let buildingNumber = building;
        user = { adress, alert, buildingNumber, email, id, name, password, scors }
        window.localStorage.setItem('current_user', JSON.stringify(user));
        console.log(JSON.parse(localStorage.getItem('current_user')));
        debugger
        navigate('/profileUser');
        // Object.values(data[0]).map((value, index) => {
        //     console.log(value);
        // })
        //עדכון llocalstoreg============
        // let data = await fetch(`http://localhost:2024/user/${current.password}/${current.name}`);
        // data = await data.json();

        //================================

    }
    return (
        <>
            <NavUser></NavUser>
            <form onSubmit={(event) => updateHelper(event)}>
                <div >
                    {
                    }
                    <h1>{current.name}</h1>
                    <br></br>
                    <input className="input" placeholder={current.password} type="password" onChange={(event) => setPassword(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder={current.alert} onChange={(event) => setEmail(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder={current.adress} onChange={(event) => setAdress(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder={current.buildingNumber} onChange={(event) => setBuilding(event.target.value)} />
                    <br></br>
                    <input className="button" type="submit" value="update" />
                </div>
            </form>
            <Footer></Footer>
        </>
    );
}
