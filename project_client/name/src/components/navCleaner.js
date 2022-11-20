import React from "react";
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../Css/nav.css'
import HomeCleaners from "./homeCleaners"
import Logo from '../img/8.jpg';


export default function NavCleaner(props) {
    const navigate = useNavigate();
    let current = JSON.parse(localStorage.getItem('current_user'));
   
    async function ExitThePool() {
        debugger
        let id = current.id;
        let user = {id};
        let data = await fetch(`http://localhost:2024/cleaner/delete/Cleaner`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user) ,
            mode: 'cors',
        });
        debugger
        alert("יצאת ממאגר העוזרות שלנו");
        navigate('/logout')
    }

    // async function order(choice) {
    //      if (choice == "Orders") {
    //         navigate(`/${current.name}/ordersCleaner`);
    //     }
    // }


    async function addToSale() {
        debugger
        if (current.sale) {
            alert("אתה כבר בסייל")
            let id = current.id;
            console.log(id);
        }
        else {
            let id = current.id;
            let user =  {id} ;
            try {
                let data = await fetch(`http://localhost:2024/cleaner/sale`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user),
                    mode: 'cors',
                })
                debugger

                //מה עדיף קריאת fatch או מה שעשיתי כאן???
                console.log(data.status);
                if (data.status == 200) {
                    alert("you add to sales");
                    let name = current.name;
                    let password = current.password;
                    let  branchNum = current.branchNum;
                    let bunkAcount= current.bunkAcount;
                    let bunkNum= current.bunkNum;
                    let city= current.city;
                    let expertise= current.expertise;
                    let gender= current.gender;
                    let isDelited= current.isDelited;
                    let price= current.price;
                    let religion= current.religion;
                    let sale = 1;
                    let cityId= current.cityId;
                    let expertiseId= current.expertiseId;
                    let genderId= current.genderId;
                    let religionId= current.religionId;
                    let user = { branchNum, bunkAcount, bunkNum, city, cityId, expertise, expertiseId, gender, genderId, id, isDelited, name, password, price, religion, religionId, sale }
                    window.localStorage.setItem('current_user',JSON.stringify(user));
                }
            }
            catch (e) {
                alert("this error: " + e);
            }

        }
    }


    return (
        <nav >
            {/* <NavLink className="nav-link" exact to="/">logIn</NavLink> */}
            <ul>
            <img src={Logo} style={{width:'100px',height:'100px',borderRadius:'45px',float:'left'}}></img>
                <li style={{ marginLeft: "100px" }}><button className="buttonNav" onClick={() => ExitThePool()}>Leave</button></li>
                <li><a href='/profileCleaner'>profile</a></li>
                <li><a  href='/ordersCleaner'>orders</a></li>
                <li><button className="buttonNav" onClick={(e)=>addToSale(e)}>add me to sale</button></li>
                <li><a   href="/homeCleaner">home</a></li>
                <li style={{ float: "right" }}><a   href="/logout">logOut</a></li>
                {/* <li style={{ float: "right" }}><a class="active" href='/login'>log in</a></li> */}
            </ul>
           
        </nav>
    );
}




