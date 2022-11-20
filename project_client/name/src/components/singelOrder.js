import React, { useState, useEffect } from 'react'
import '../Css/home.css' 


export default function SingelOrder(props) {
    const [able, setAble] = useState(props.item1.status);
    const [ableRes, setAbleRes] = useState(false);
    const [flag, setFlag] = useState(false);
    const [valText, setValText] = useState("");
    const [valSelect, setValSelect] = useState(0);


    async function updateStatus(item) {
        setAble(true);
        let current = JSON.parse(localStorage.getItem('current_user'))
        let status = 1;
        let orderId = item.numberOfOrder
        let user = { status, orderId };
        try {
            let data = await fetch(`http://localhost:2024/order/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
                mode: 'cors',
            })
            if (!data) {
                throw ("no helpers in the city");
            }
            else {
                console.log("its ok");
                    // setAble(true);
            }
        }
        catch (err) {
            alert(err);
        }
    }

    async function addResponse(val) {
        debugger
        let idOfCleaner = props.item1.id;
        let details = { idOfCleaner, valText, valSelect }
        try {
            let data = await fetch(`http://localhost:2024/order/response`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(details),
                mode: 'cors',
            })//לעדכן llocalstoreg======================
            
            if (!data) {
                console.log("its not ok");
                throw ("no helpers in the city");
            }
            else {
                console.log("its ok");
                setAbleRes(false);
                setFlag(true);
            }
        }
        catch (err) {
            console.log("this Error:" +err)
            alert(err);
        }
    }


    return (
        <>
        
            <div style={{width:'40%'}}>{props.item1.adress && <div className='ordering'>
                <h6> number of order:        {props.item1.numberOfOrder}</h6>
                <h6> date of order:         {new Date(props.item1.date).toLocaleDateString()}</h6>
                <h6>name of costomer:       {props.item1.name}</h6>
                <h6> adress of costomer: {props.item1.adress}</h6>
                <h6>bulding number of costomer:   {props.item1.buildingNumber}</h6>
                <h6>amout of order:        {props.item1.times}</h6>
                <h6>endPrice:              {props.item1.endPrice}</h6>
                <h6>orders status: </h6>{able ?<h6>dun</h6> :<h6>not dun</h6>}
                {able && <input type="checkBox" checked="true"></input>}
                {!able  &&<input type="checkBox" onChange={(event) => updateStatus(props.item1)}></input>}
            </div>}</div>

            {props.item1.gender &&
                <div className='ordering'>
                    <h6> number of order:       {props.item1.numberOfOrder}</h6>
                    <h6> date of order:         {new Date(props.item1.date).toLocaleDateString()}</h6>
                    <h6>name of cleaner:       {props.item1.name}</h6>
                    <h6> expertise of cleaner: {props.item1.expertise}</h6>
                    <h6>religion of cleaner:   {props.item1.religion}</h6>
                    <h6>gender of cleaner:     {props.item1.gender}</h6>
                    <h6>price of cleaner:      {props.item1.price}</h6>
                    <h6>amout of order:        {props.item1.times}</h6>
                    <h6>endPrice:              {props.item1.endPrice}</h6>
                    <h6>orders status: </h6>   {able ?<h6>dun</h6> :<h6>not dun</h6>}
                    {!flag && props.item1.status!==0 && <button type="submit" onClick={(e) => setAbleRes(true)}>add response</button>}
                    {flag && props.item1.status!==0 && <h6> תגובתך התקבלה בהצלחה<br></br>תודה ששתפת!</h6>}
                    {ableRes && <div>
                        <textarea value={valText} onChange={(e) => setValText(e.target.value)} ></textarea>
                        <select value={valSelect} onChange={(e) => setValSelect(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button onClick={() => addResponse()}>Add</button>
                    </div>}
                </div>}

        </>
    );
}