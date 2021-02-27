import React, { useEffect, useState } from 'react';

import { BsXDiamondFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";



import './EventList.css';

<<<<<<< HEAD:client/src/Components/EventList.js
const list = (props) =>{
   
    // return(<>
    //    <p><BsFillCaretRightFill />   {props.event} &nbsp; <a href={props.url}><BsFillInfoCircleFill /></a></p>
    // </>);
=======
const List = (props) =>{
    return(<>
       <p><BsXDiamondFill /> &nbsp;   {props.event} &nbsp; <a href={props.url}><BsFillInfoCircleFill /></a></p>
    </>);
>>>>>>> e5cee8fd3b5a9f6833a30b47092df3e6a6f88693:client/src/Components/event_list/EventList.js
}

const EventList = (props) =>{
    const [events, setEvents] = useState();

    return(<>
    <div className="cont-event">
        <div className="event">
            { props.prevQuestion &&
                <div>
                    <h4 className="d-flex justify-content-center">Important event on: {props.prevQuestion?.date}</h4>
                    { 
                        <p><BsFillCaretRightFill /> 
                            {props.prevQuestion?.event[0].desc} &nbsp; 
                            <a href={props.prevQuestion?.event[0].url}><BsFillInfoCircleFill /></a>
                        </p>
                        
                    // props.currQuestion.event.map((items) => {
                    //     return <p><BsFillCaretRightFill />   {items.desc} &nbsp; <a href={items.url}><BsFillInfoCircleFill /></a></p>
                    // }) 
                    }
                    <p className="text-right">Click the  <BsFillInfoCircleFill /> icon to read more.</p>
                    <br />
                </div>
            }
        </div>
    </div>
    </>);
}

export default EventList;