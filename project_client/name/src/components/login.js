import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Css/login.css'
import Nav from './nav'

export default function Login(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const [cleaner, setCleaner] = useState(false);

    async function getUser(event) {
        event.preventDefault();
        try {
            let data;
            if(cleaner){
                data = await fetch(`http://localhost:2024/cleaner/${password}/${username}`);
                data = await data.json();
                console.log(data[0])
            }
            else{
                 data = await fetch(`http://localhost:2024/user/${password}/${username}`);
                data = await data.json();
            }
          
            if (!data) {
                throw ("no available account");
            }
            else {
                window.localStorage.setItem('current_user', JSON.stringify(data[0]) );
                if(cleaner){
                    navigate(`/${data[0].id}/homeCleaner`);
                }
                else{
                    navigate(`/${data[0].id}/homeUser`);
                }
            }
        }
        catch (err) {
            alert(err);
        }
    }


    return (
        <>
        <Nav></Nav>
        <div className="body">
        <form className="logIn" onSubmit={(event) => getUser(event)}>
             <div style={{ marginTop: "100px" }}>
                 <br></br>
                 <input className="input"  required placeholder="enter your userName" onChange={(event) => setUsername(event.target.value)} />
                 <br></br>
                 <input className="input"  required placeholder="enter your password" type="password" onChange={(event) => setPassword(event.target.value)} />
                 <br></br>
                 <input    value="cleaner"   type="checkBox" onChange={(event) => setCleaner(true)} />
                 <br></br>
                 <input className="button"  type="submit" value="log in" />
             </div>
         </form></div>
         
     </>
    );
}
