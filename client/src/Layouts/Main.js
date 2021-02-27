import React from 'react';
import './Main.css';

import HowTo from '../Components/HowTo';
import EventList from '../Components/EventList';

import GameBoard from '../Components/game-board/GameBoard';

const Main = () =>{
    return(<>
        <div className="container-fluid back">
            <GameBoard />
            <EventList date="1 January 2001" />
        </div>
    </>);
}

export default Main;