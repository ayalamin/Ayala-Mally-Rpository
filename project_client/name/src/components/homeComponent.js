import React, { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom';
import '../Css/nav.css'
import NavUser from './navUser'
import Footer from './footer'
import '../Css/home.css'
import CleanerPage from './cleanerPage';

export default function HomeComponent(props) {

    //let current = JSON.parse(localStorage.getItem('current_user'))
    const navigate = useNavigate();
    const [myData, setMyData] = useState([]);
    const [flag, setFlag] = useState(true);
    const [flagIfGo, setFlagIfGo] = useState(false);
    // const [current, setCurrent] = useState({});


    function goToCleanerPage(person) {

        window.localStorage.setItem('current_order', JSON.stringify(person));
        navigate(`/cleanerPage`);
    }

    // async function GetTenCleaners() {

    //     try {
    //        // setCurrent(JSON.parse(localStorage.getItem('current_user')));
    //         let data = await fetch(`http://localhost:2024/cleaner/ten`);
    //         data = await data.json();
    //         console.log(data);
    //        // setMyData(data);
    //         if (!data) {
    //             throw ("no helpers in the city");
    //         }
    //     }
    //     catch (err) {
    //         alert(err);
    //     }
    // }



    async function GetTenCleaners() {
        try {

            let data = await fetch(`http://localhost:2024/cleaner/ten`);
            data = await data.json();
            console.log(data);
            setMyData(data);
            if (!data) {

                throw ("no helpers in the city");
            }
        }
        catch (err) {
            alert(err);
        }
    }



    useEffect(() => {
        console.log(props.ifEnter)
        GetTenCleaners();
       
    }, [])


    return (
        <>
            <div className="divCleaners" >
                <div className="containHelpers" >{myData.map((item) => {

                    return (
                        <>
                            <form className="cleaner" onSubmit={(event) => goToCleanerPage(item)}>

                                <div className="boxCleaner">
                                    <h3>Name: {item.name}</h3>
                                    <h3>City: {item.city}</h3>
                                    <h3>Price: {item.price}</h3>
                                    <h3>Religion: {item.religion}</h3>
                                    <h3>Gender: {item.gender}</h3>
                                    {props.ifEnter && <input className="order" type="submit" value="order"></input>}
                                </div>
                            </form>
                        </>
                    )
                })}
                </div>
            </div>
        </>
    );
}


