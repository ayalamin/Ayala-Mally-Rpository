import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Css/login.css'
import Nav from './nav'


export default function SignInCleaners(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const [expertise, setExpertise] = useState();
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [price, setPrice] = useState('');
    const [religion, setReligion] = useState('');
    const [gender, setGender] = useState('');
    const [bankNum, setBankNum] = useState('');
    const [branchNum, setBranchNum] = useState('');
    const [bankAcount, setBankAcount] = useState('');

    const [optionCity, setOptionCity] = useState('');
    const [optionsReligion, setOptionsReligion] = useState('');
    const [optionsGender, setOptionsGender] = useState('');
    const [optionsExpertise, setOptionsExpertise] = useState('');

    async function postUser(event) {
        event.preventDefault()
        try {
            let sale = 0;
            debugger
            let isDelited = 0;
            const user = { username, password, email, city, expertise, religion, gender, price, bankNum, branchNum, bankAcount };
            // const user1 = { username,password, email, city,expertise,religion,gender, price, bankNum,branchNum, bankAcount,sale,isDelited };
            await fetch("http://localhost:2024/cleaner", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
                mode: 'cors',
            })

            //עדכון llocalstoreg============
            let user1 = await fetch(`http://localhost:2024/cleaner/${password}/${username}`)
            user1 = await user1.json();
            window.localStorage.setItem('current_user', JSON.stringify(user1[0]));
            //=================================

            //========update prefer
            const userForPrefere = { city, expertise, religion, gender, price };
            await fetch("http://localhost:2024/user/alert", {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userForPrefere),
                mode: 'cors',
            })

            debugger
            let id = user1[0].id;
            const scedule = { 'id': id };
            await fetch("http://localhost:2024/order/scedule", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(scedule),
                mode: 'cors',
            })
            
            navigate(`/${username}/homeCleaner`)
        }
        catch (err) {
            alert(err);
        }
    }

    async function getData() {
        let result = await fetch("http://localhost:2024/user/sign");
        result = await result.json();
        if (result) {
            setOptionCity(result[0].map(City => <option value={City.id} key={City.name}>{City.name}</option>));
            setOptionsGender(result[1].map(Gender => <option value={Gender.id} key={Gender.name}>{Gender.name}</option>));
            setOptionsReligion(result[2].map((Religion) => <option value={Religion.id} key={Religion.name}>{Religion.name}</option>));
            setOptionsExpertise(result[3].map((expertise) => <option value={expertise.id} key={expertise.name}>{expertise.name}</option>));
        }
    }

    useEffect(() => {
        getData()
    }, []);


    return (
        <>
        <Nav></Nav>
            <form onSubmit={(event) => postUser(event)}>
                <div className='signCleaner' style={{ marginLeft: "29%" }}>
                    <div className='left'>
                        <input className="input" required placeholder="Enter your userName" onChange={(event) => setUsername(event.target.value)} />
                        <br></br>
                        <input className="input" required placeholder="Enter your password" type="password" onChange={(event) => setPassword(event.target.value)} />
                        <br></br>
                        <input className="input" required placeholder="Enter your email" onChange={(event) => setEmail(event.target.value)} />
                        <br></br>
                        <input className="input" required placeholder="Enter your price" onChange={(event) => setPrice(event.target.value)} />
                        <br></br>
                        <input className="input" required placeholder="Enter your bankNum" onChange={(event) => setBankNum(event.target.value)} />
                        <br></br>
                    </div>
                    <div className='right'>
                        <input className="input" required placeholder="Enter your branchNum" onChange={(event) => setBranchNum(event.target.value)} />
                        <br></br>
                        <input className="input" required placeholder="Enter your bankAcount" onChange={(event) => setBankAcount(event.target.value)} />
                        <br></br>
                        <div className='select'>
                            <div>
                                <select className="input" style={{ width: '231px', color: 'grey' }} onChange={(event) => setCity(event.target.value)} >
                                    <option>choose City</option>
                                    {optionCity}
                                </select>
                            </div>
                            <div>
                                <select className="input" style={{ width: '231px', color: 'grey' }} onChange={(event) => setGender(event.target.value)} >
                                    <option>choose Gender</option>
                                    {optionsGender}
                                </select>
                            </div>
                            <div>
                                <select className="input" style={{ width: '231px', color: 'grey' }} onChange={(event) => setReligion(event.target.value)}>
                                    <option>choose Religion</option>
                                    {optionsReligion}
                                </select>
                            </div>
                            <div>
                                <select className="input" style={{ width: '231px', color: 'grey' }} onChange={(event) => setExpertise(event.target.value)}>
                                    <option>choose Expertise</option>
                                    {optionsExpertise}
                                </select>
                            </div>
                        </div>
                        <input className="button" type="submit" value="sign in" />
                    </div>
                </div>
            </form>
        </>
    );
}
