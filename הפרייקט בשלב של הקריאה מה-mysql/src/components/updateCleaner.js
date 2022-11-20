import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function UpdateCleaner(props) {
    let current = JSON.parse(localStorage.getItem('current_user'));
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [expertise, setExpertise] = useState();
    const [city, setCity] = useState();
    const [price, setPrice] = useState();
    const [religion, setReligion] = useState();
    const [gender, setGender] = useState();
    const [bunkNum, setBankNum] = useState();
    const [branchNum, setBranchNum] = useState();
    const [bunkAcount, setBankAcount] = useState();
    const navigate = useNavigate();
    function setItem() {
        debugger
        setUsername(current.name);
        setPassword(current.password);
        setExpertise(current.expertise);
        setCity(current.city);
        setPrice(current.price);
        setReligion(current.religion);
        setGender(current.gender);
        setBankNum(current.bunkNum);
        setBranchNum(current.branchNum);
        setBankAcount(current.bunkAcount);
    }

    useEffect(() => {
        debugger

        setItem();
    }, [])

    async function updateHelper(event) {
        event.preventDefault();
        try {
            let id = current.id;
            let data = await fetch(`http://localhost:2024/cleaner/${id}/${username}/${password}/${city}/${expertise}/${religion}/${gender}/${price}/${bunkNum}/${branchNum}/${bunkAcount}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                //  body: JSON.stringify(user) ,
                mode: 'cors',
            })
            if (data.status == 200) {
                alert("your update its scsses")
                console.log(data);
                window.localStorage.setItem('current_user', JSON.stringify({id,username,password,city,expertise,religion,gender,price,bunkNum,branchNum,bunkAcount}) )
                navigate('/profileCleaner');
            }
        }
        catch (e) {
            console.log("this error" + e)
        }
    }
    return (
        <>
            <h1>update-cleaners</h1>
            <form onSubmit={(event) => updateHelper(event)}>
                <div style={{ marginTop: "100px" }}>
                    <input className="input" placeholder={current.name} onChange={(event) => setUsername(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder={current.password} type="password" onChange={(event) => setPassword(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder={current.city} onChange={(event) => setCity(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder={current.expertise} onChange={(event) => setExpertise(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder={current.religion} onChange={(event) => setReligion(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder={current.gender} onChange={(event) => setGender(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder={current.price} onChange={(event) => setPrice(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder={current.bunkNum} onChange={(event) => setBankNum(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder={current.branchNum} onChange={(event) => setBranchNum(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder={current.bunkAcount} onChange={(event) => setBankAcount(event.target.value)} />
                    <br></br>
                    <input className="button" type="submit" value="update" />
                </div>
            </form>
        </>
    );
}
