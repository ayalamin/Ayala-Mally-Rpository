import { Navigate, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

export default function Director() {
    const nevigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(1);
    
    async function Director(event) {
        event.preventDefault();
        let a=count+1;
        setCount(a);
        if(count==3){
            alert("You are a burglary suspect do not try again");
           Navigate('/')
       }
       let data = await fetch(`http://localhost:2024/director/${password}/${name}`);
        data = await data.json();
        console.log(data);
      

    }

    return (
        <div >
             <form onSubmit={(event) => Director(event)}>
            <input className="input"  required placeholder="name" onChange={(event) => setName(event.target.value)} />
            <br></br>
            <input className="input"  required placeholder="password" onChange={(event) => setPassword(event.target.value)} />
            <br></br>
            <input className="button" type="submit" value="sign in as a director" />
            </form>
        </div>
    );
}



