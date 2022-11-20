import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../Css/login.css'



export default function SignInUser(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const [current, setCurrent] = useState({});
    const [email, setEmail] = useState('');

    async function postUser(event) {
        event.preventDefault();
        debugger
        try {
            let familyName = "jlk";
            let client = null;
            let Cleaner = null;
            const user = { username, familyName, password, email, client, Cleaner };

            await fetch("http://localhost:2024/user", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
                mode: 'cors',
            })
            
            //////////////////////////////////////////////////////////////
            window.localStorage.setItem('current_user', JSON.stringify(user));
            ///////////////////////////////////////////////////////////////
            navigate(`/${password}/homeUser`);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div>
                <h1>sign-in-user</h1>
                <form onSubmit={(event) => postUser(event)}>
                    <div style={{ marginTop: "100px" }}>
                        <h1>user</h1>
                        <input className="input" required placeholder="enter your userName" onChange={(event) => setUsername(event.target.value)} />
                        <br></br>
                        <input className="input" required placeholder="enter your password" type="password" onChange={(event) => setPassword(event.target.value)} />
                        <br></br>
                        <input className="input" required placeholder="enter your email" type="email" onChange={(event) => setEmail(event.target.value)} />
                        <br></br>
                        <input className="button" type="submit" value="sign in" />
                    </div>
                </form>
            </div>
        </>
    );
}
