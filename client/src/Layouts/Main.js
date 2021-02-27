import React from 'react';
import './Main.css';

import EventList from '../Components/event_list/EventList';
import GameBoard from '../Components/game-board/GameBoard';

import EndBlock from '../Components/end_game/EndBlock';

const Main = () =>{
    return(<>
        <div className="container-fluid back">
            <GameBoard />
            <EventList date="1 January 2001" />
        </div>
    </>);
}

export default Main;