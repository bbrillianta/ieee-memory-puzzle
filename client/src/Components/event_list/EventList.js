import React, { useEffect, useState } from 'react';

import { BsXDiamondFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";



import './EventList.css';

const EventList = (props) =>{
    const [events, setEvents] = useState();

    return(<>
    <div className="cont-event">
        <div className="event">
            { props.prevQuestion &&
                <div>
                    <h4 className="d-flex justify-content-center">Important event on: {props.prevQuestion?.date}</h4>
                    { 
                        <p><BsXDiamondFill /> &nbsp;
                            {props.prevQuestion?.event[0].desc} &nbsp; 
                            <a href={props.prevQuestion?.event[0].url} target="_blank"><BsFillInfoCircleFill /></a>
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