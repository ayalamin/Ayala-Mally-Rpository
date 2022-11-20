import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../Css/login.css'



export default function SignInUser() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const [building, setBuilding] = useState();
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');


 //   const [optionCity, setOptionCity] = useState('');

    // let optionsGender;
    // let optionsReligion;
    // let optionsTimesInWeek;
    // let TimesInWeek= [1,2,3,4,5,6];
    // let status = 1;

    async function postUser(event) {


        event.preventDefault();
        debugger
        try {
            const user = {/*default,*/username,password,email,building,adress};

            await fetch("http://localhost:2024/user", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
                mode: 'cors',
            })

            //////////////////////////////////////////////////////////////
            window.localStorage.setItem('current_user', JSON.stringify(user));
            ///////////////////////////////////////////////////////////////
            navigate(`/${username}/homeUser`);
        }
        catch (err) {
            console.log(err);
        }
    }

    // async function getData() {
    //     let result = await fetch("http://localhost:2024/user/sign");
    //     result = await result.json();
    //     if (result) {
    //         // setOptionCity( result[0].map(City => <option key={City}>{City}</option>));
    //         // optionsGender = result[1].map(Gender => <option key={Gender}>{Gender}</option>);
    //         // optionsReligion = result[2].map((Religion) => <option key={Religion}>{Religion}</option>);
    //         // optionsTimesInWeek = TimesInWeek.map((times) => <option key={times}>{times}</option>);
    //     }
    // }

    // useEffect(async () => {
    //     getData()
    //   }, []);

    return (
        <>
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
                        <input className="input" required placeholder="enter your adress"  onChange={(event) => setAdress(event.target.value)} />
                        <br></br>
                        <input className="input" required placeholder="enter your building number"  onChange={(event) => setBuilding(event.target.value)} />
                        <br></br>
                        <input className="button" type="submit" value="sign in" />
                  
                        {/* <select >
                            { optionCity }
                        </select>
                        <select >
                            { optionsGender }
                        </select>
                        <select >
                            {optionsReligion}
                        </select>
                        <select >
                            {optionsTimesInWeek}
                        </select> */}

                        
                    </div>
                </form>
            </div>
        </>
    );
}
