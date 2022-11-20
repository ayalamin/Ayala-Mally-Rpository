import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NavCleaner from './navCleaner'
import Footer from './footer'
import '../Css/login.css'

export default function UpdateCleaner(props) {
    let current = JSON.parse(localStorage.getItem('current_user'));
    const [name, setUsername] = useState();
    const [password, setPassword] = useState();
    const [expertise, setExpertise] = useState();
    const [city, setCity] = useState();
    const [price, setPrice] = useState();
    const [religion, setReligion] = useState();
    const [gender, setGender] = useState();
    const [optionCity, setOptionCity] = useState('');
    const [optionsReligion, setOptionsReligion] = useState('');
    const [optionsExpertise, setOptionsExpertise] = useState('');
    const [bunkNum, setBankNum] = useState();
    const [branchNum, setBranchNum] = useState();
    const [bunkAcount, setBankAcount] = useState();

    const navigate = useNavigate();
    function setItem() {
        debugger
        setUsername(current.name);
        setPassword(current.password);
        setExpertise(current.expertiseId);
        setCity(current.cityId);
        setPrice(current.price);
        setReligion(current.religionId);
        setGender(current.genderId);
        setBankNum(current.bunkNum);
        setBranchNum(current.branchNum);
        setBankAcount(current.bunkAcount);
    }

    useEffect(() => {
        debugger
        getData();
        setItem();
    }, [])

    async function getData() {
        let result = await fetch("http://localhost:2024/user/sign");
        result = await result.json();
        if (result) {
            setOptionCity(result[0].map(City => <option value={City.id} key={City.name}>{City.name}</option>));
            setOptionsReligion(result[2].map((Religion) => <option value={Religion.id} key={Religion.name}>{Religion.name}</option>));
            setOptionsExpertise(result[3].map((expertise) => <option value={expertise.id} key={expertise.name}>{expertise.name}</option>));
        }
    }

    async function updateHelper(event) {
        event.preventDefault();
        try {
            let id = current.id;

            debugger
            let user = { branchNum, bunkAcount, bunkNum, city, expertise, gender, id, name, password, price, religion }
            let data = await fetch(`http://localhost:2024/cleaner/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
                mode: 'cors',
            })
            if (data.status == 200) {
                alert("your update its scsses")
                console.log(data);
                let sale = current.sale;
                let isDelited = current.isDelited;
                let cityId = current.cityId;
                let expertiseId = current.expertiseId;
                let genderId = current.genderId;
                let religionId = current.religionId;
                user = { branchNum, bunkAcount, bunkNum, city, cityId, expertise, expertiseId, gender, genderId, id, isDelited, name, password, price, religion, religionId, sale }
                window.localStorage.setItem('current_user', JSON.stringify(user));
                navigate('/profileCleaner');
            }
        }
        catch (e) {
            console.log("this error" + e)
        }
    }
    return (
        <>
            <NavCleaner></NavCleaner>
            <div style={{marginLeft:'200px'}}>
            <form onSubmit={(event) => updateHelper(event)}>
                <div  className="update"style={{ marginTop: "100px"}}>
                    <h1>{current.name} </h1>
                    <input className="input" placeholder={current.password} type="password" onChange={(event) => setPassword(event.target.value)} />

                    <select onChange={(event) => setReligion(JSON.parse(event.target.value))}>
                        <option>change Religion</option>
                        {optionsReligion}
                    </select>
                    <br></br>
                    <select onChange={(event) => setCity(JSON.parse(event.target.value))} >
                        <option>change City</option>
                        {optionCity}
                    </select>
                    <br></br>
                    <select onChange={(event) => setExpertise(JSON.parse(event.target.value))}>
                        <option>change Expertise</option>
                        {optionsExpertise}
                    </select>
                    <br></br>
                    {/* <input className="input" placeholder={current.city} onChange={(event) => setCity(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder={current.expertise} onChange={(event) => setExpertise(event.target.value)} />
                    <br></br>
                    <input className="input" placeholder={current.religion} onChange={(event) => setReligion(event.target.value)} />
                    <br></br> */}
                    <h1>{current.gender}</h1>
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
            </div>
            <Footer></Footer>
        </>
    );
}
