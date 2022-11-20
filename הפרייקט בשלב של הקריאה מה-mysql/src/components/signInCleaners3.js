import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Css/login.css'



export default function SignInUser(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const [expertise, setExpertise]=useState();
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [price, setPrice] = useState('');
    const [religion, setReligion] = useState('');
    const [gender, setGender] = useState('');
    const [bankNum, setBankNum] = useState('');
    const [branchNum  , setBranchNum  ] = useState('');
    const [bankAcount  , setBankAcount  ] = useState('');



    async function postUser(event) {
       event.preventDefault()
        try {
          
            const user = { username,password, email, city,expertise,religion,gender, price, bankNum,branchNum, bankAcount };

                await fetch("http://localhost:2024/cleaner", { 
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user) ,
                    mode: 'cors',
                })
                ///////////////////////////////////////////////////////////////
                window.localStorage.setItem('current_user', JSON.stringify(user));
                ///////////////////////////////////////////////////////////////
                navigate(`/${username}/homeCleaner`)
        }
        catch (err) {
            alert(err);
        }
    }

    return (
        <>
         <h1>sign-in-cleaners</h1>
           <form onSubmit={(event) => postUser(event)}>
                <div style={{ marginTop: "100px" }}>
                    <h1>cleaner</h1>{
                    //////////////////////////////////////////////שינויים קלים בלבד
                }
                     <input className="input"  required placeholder="Enter your userName" onChange={(event) => setUsername(event.target.value)} />
                    <br></br>
                    <input className="input"  required placeholder="Enter your password" type="password" onChange={(event) => setPassword(event.target.value)} />
                    <br></br>
                    <input className="input"  required placeholder="Enter your city"  onChange={(event) => setCity(event.target.value)} />
                    <br></br>
                    <input className="input"  required placeholder="Enter your email"  onChange={(event) => setEmail(event.target.value)} />
                    <br></br>
                    <input className="input"  required placeholder="Enter your expertise" onChange={(event) => setExpertise(event.target.value)} />
                    <br></br>
                    <input className="input"  required placeholder="Enter your religion"  onChange={(event) => setReligion(event.target.value)} />
                    <br></br>
                    <input className="input"  required placeholder="Enter your gender"  onChange={(event) => setGender(event.target.value)} />
                    <br></br>
                    <input className="input"  required placeholder="Enter your price"  onChange={(event) => setPrice(event.target.value)} />
                    <br></br>
                    <input className="input"  required placeholder="Enter your bankNum"  onChange={(event) => setBankNum(event.target.value)} />
                    <br></br>
                    <input className="input"  required placeholder="Enter your branchNum"  onChange={(event) => setBranchNum(event.target.value)} />
                    <br></br>
                    <input className="input"  required placeholder="Enter your bankAcount"  onChange={(event) => setBankAcount(event.target.value)} />
                    <br></br>
                    <input className="button"  type="submit" value="sign in" />
                </div>
            </form>
        </>
    );
}
