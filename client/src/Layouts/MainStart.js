import React from 'react';
import './Main.css';

import HowTo from '../Components/how_to/HowTo';
import StartBlock from '../Components/start_game/StartBlock';

const MainStart = () =>{
    return(<>
        <div className="container-fluid back">
            <StartBlock />
            <HowTo />
        </div>
    </>);
}

export default MainStart;