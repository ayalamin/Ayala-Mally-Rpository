import React, { useState, useEffect } from 'react'
import { useNavigate, } from 'react-router-dom';
import '../Css/nav.css'
// import '../Css/home.css'
import NavUser from './navUser'
import Footer from './footer'
import HomeComponent from './homeComponent'
import Popup from './popup'

export default function HomeUser() {
    let current = JSON.parse(localStorage.getItem('current_user'))
    const [timedPopup, setTimedPopup] = useState(false);
    const navigate = useNavigate();
    const [flag, setFlag] = useState(true);
    //const [current1, setCurrent1] = useState({});
    const [flag2, setFlag2] = useState(true);
    debugger
    // setCurrent1(Object.current.map((value) => {
    //     console.log(value);
    // }))
    // async function alert1() {
    //     let id = current.id;
    //     try {

    //         debugger
    //         let data = await fetch(`http://localhost:2024/user/${id}`);
    //         data = await data.json();
    //         debugger
    //         if (data[0]) {
    //             setFlag(false);
    //             alert(data[0].alert)
    //         }
    //         console.log(data)
    //     }
    //     catch (err) {
    //         alert(err);
    //     }
    //     deleteAlert(id)
    // }

    async function deleteAlert() {
        let id = current.id;
        let user = { id };
        try {
            let result = await fetch(`http://localhost:2024/user/deleteAlert`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
                mode: 'cors',
            });

        }
        catch (err) {
            alert(err);
        }
        debugger
        putInLocal(id);
        // let data = await fetch(`http://localhost:2024/user/${current.password}/${current.username}`);
        // data = await data.json();
        // console.log(data);
        // debugger

    }

    function putInLocal(id) {
        let name = current.name;
        let email = current.email;
        let password = current.password;
        let adress = current.adress;
        let buildingNumber = current.buildingNumber;
        let scors = current.scors;
        let alert = "";
        let user = { adress, alert, buildingNumber, email, id, name, password, scors }
        window.localStorage.setItem('current_user', JSON.stringify(user));
    }

    function putPopup() {
        if (current.alert) {
            // setTimeout(() => {
            //     setTimedPopup(true);

            // }, 3000)
        }

    }


    useEffect(() => {
        //putPopup();
        if (current.alert != "" && current.alert != null) {
            setTimedPopup(true);
            deleteAlert();
            setFlag(false);
        }
    }, [])

    return (
        <>

            <NavUser></NavUser>
            <div className="home">
                {flag2 && <Popup trigger={timedPopup} setTrigger={setTimedPopup}><h4>A suitable assistant has been found for you</h4></Popup>}
                <HomeComponent ifEnter={true}></HomeComponent>
            </div>
            <Footer></Footer>


        </>

    );
}


