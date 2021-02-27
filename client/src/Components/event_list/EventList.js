import React from 'react';

import { BsXDiamondFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";



import './EventList.css';

const List = (props) =>{
    return(<>
       <p><BsXDiamondFill /> &nbsp;   {props.event} &nbsp; <a href={props.url}><BsFillInfoCircleFill /></a></p>
    </>);
}

const EventList = (props) =>{
    return(<>
    <div className="cont-event">
        <div className="event">
            <h4 className="d-flex justify-content-center">Important dates on: {props.date}</h4>
            <List event="desc event" url="url event" />
            <List event="desc event" url="url event" />
            <List event="desc event" url="url event" />
            <p className="text-right">Click the  <BsFillInfoCircleFill /> icon to read more.</p>
            <br />
        </div>
    </div>
    </>);
}

export default EventList;