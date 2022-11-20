import React, { useState, useEffect } from 'react'


export default function SingelOrder(props) {
    const [able, setAble] = useState(props.item1.status);
    const [ableRes, setAbleRes] = useState(false);
    const [flag, setFlag] = useState(false);

    async function updateStatus(orderId) {
        let current = JSON.parse(localStorage.getItem('current_user'))
        let status = 1;
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
                setAble(true);
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
            })
            if (!data) {

                throw ("no helpers in the city");

            }
            else {
                console.log("its ok");
                setAbleRes(false);
                setFlag(true);
            }
        }
        catch (err) {
            alert(err);
        }
    }


    const [valText, setValText] = useState("");
    const [valSelect, setValSelect] = useState(0);

    return (
        <>
            {props.item1.adress && <div className="cleaner">
                <h1> number of order:        {props.item1.numberOfOrder}</h1>
                <h1> date of order:         {props.item1.date}</h1>
                <h1>name of costomer:       {props.item1.name}</h1>
                <h1> adress of costomer: {props.item1.adress}</h1>
                <h1>bulding number of costomer:   {props.item1.buildingNumber}</h1>
                <h1>amout of order:        {props.item1.times}</h1>
                <h1>endPrice:              {props.item1.endPrice}</h1>
                <h1>orders status: </h1>
                {able && <input type="checkBox" checked="true"></input>}
                {!able && <input type="checkBox" onChange={(event) => updateStatus(props.item1.numberOfOrder)}></input>}
            </div>}

            {props.item1.gender &&
                <div className="cleaner">
                    <h1> number of order:       {props.item1.numberOfOrder}</h1>
                    <h1> date of order:         {props.item1.date}</h1>
                    <h1>name of cleaner:       {props.item1.name}</h1>
                    <h1> expertise of cleaner: {props.item1.expertise}</h1>
                    <h1>religion of cleaner:   {props.item1.religion}</h1>
                    <h1>gender of cleaner:     {props.item1.gender}</h1>
                    <h1>price of cleaner:      {props.item1.price}</h1>
                    <h1>amout of order:        {props.item1.times}</h1>
                    <h1>endPrice:              {props.item1.endPrice}</h1>
                    <h1>orders status: {props.item1.status}</h1>
                    {!flag && props.item1.status && <button type="submit" onClick={(e) => setAbleRes(true)}>add response</button>}
                    {props.item1.status && flag && <h1> תגובתך התקבלה בהצלחה<br></br>תודה ששתפת!</h1>}
            {ableRes && <div>
                <textarea value={valText} onChange={(e) => setValText(e.target.value)} ></textarea>
                <select value={valSelect} onChange={(e) => setValSelect(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button  onClick={() => addResponse()}>Add</button>
            </div>}
        </div>}

            </>
    );
}