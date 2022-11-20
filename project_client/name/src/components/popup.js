import React from 'react'
import '../Css/popup.css'
import X from '../img/x.jpg'
function Popup(props) {

    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
                <button className="close-button" onClick={()=>props.setTrigger(false)}><img className="x" src={X}></img></button>
                {props.children}
            </div>
        </div>
    ):""
}
export default Popup;