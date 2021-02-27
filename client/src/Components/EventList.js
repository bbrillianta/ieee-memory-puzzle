import React, { useEffect, useState } from 'react';

import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";

import './EventList.css';

const list = (props) =>{
   
    // return(<>
    //    <p><BsFillCaretRightFill />   {props.event} &nbsp; <a href={props.url}><BsFillInfoCircleFill /></a></p>
    // </>);
}

const EventList = (props) =>{
    const [events, setEvents] = useState();

    return(<>
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
    </>);
}

export default EventList;