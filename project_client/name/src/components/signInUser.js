import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../Css/login.css'
import Nav from './nav'


export default function SignInUser() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const [building, setBuilding] = useState();
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    let current = JSON.parse(localStorage.getItem('current_user'));
    const [optionCity, setOptionCity] = useState('');
    const [optionsReligion, setOptionsReligion] = useState('');
    const [optionsGender, setOptionsGender] = useState('');

    // let TimesInWeek= [1,2,3,4,5,6];
    // let status = 1;

    async function postUser(event) {


        event.preventDefault();
        debugger
        try {
            const user = { username, password, email, building, adress };
            await fetch("http://localhost:2024/user", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
                mode: 'cors',
            })

            //עדכון llocalstoreg============
            let user1 = await fetch(`http://localhost:2024/user/${password}/${username}`)
            user1 = await user1.json();
            window.localStorage.setItem('current_user', JSON.stringify(user1[0]));
            //================================
            navigate(`/${username}/homeUser`);
        }
        catch (err) {
            console.log(err);
        }
    }



    return (
        <>
            <Nav></Nav>
            <div>
                <h1>sign-in-user</h1>
                <form onSubmit={(event) => postUser(event)}>
                    <div style={{ marginTop: "100px" }}>
                        <h1>user</h1>
                        <input className="input" required placeholder="enter your userName" onChange={(event) => setUsername(event.target.value)} />
                        <br></br>
                        <input className="input" required placeholder="enter your email" type="email" onChange={(event) => setEmail(event.target.value)} />
                        <br></br>
                        <input className="input" required placeholder="enter your password" type="password" onChange={(event) => setPassword(event.target.value)} />
                        <br></br>
                        <input className="input" required placeholder="enter your adress" onChange={(event) => setAdress(event.target.value)} />
                        <br></br>
                        <input className="input" required placeholder="enter your building number" onChange={(event) => setBuilding(event.target.value)} />
                        <br></br>
                        <input className="button" type="submit" value="sign in" />
                    </div>
                </form>
            </div>
        </>
    );
}
