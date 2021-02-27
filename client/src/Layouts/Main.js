import React from 'react';
import './Main.css';

import HowTo from '../Components/HowTo';
import EventList from '../Components/EventList';

const Main = () =>{
    return(<>
        <div className="container-fluid back">
            <EventList date="1 January 2001" />
            {/* <HowTo /> */}
        </div>
    </>);
}

export default Main;