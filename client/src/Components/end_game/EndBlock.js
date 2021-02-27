import './EndBlock.css';
import Button from '../button/Button.js';
import {
    Link
  } from 'react-router-dom';

let complement = [
    "Nicely Done !",
    "Well Done !",
    "Terrific !",
    "Nice !",
    "Awesome !",
    "Nailed it !",
    "Great !",
    "Good Job !",
    "Great Job !",
    "Nice One !"
];

let said = complement[Math.floor(Math.random() * 10)];

const EndBlock = (props) => {
    return (
        <div className="cont">
        <div className="game-board container">
            <div className="row pt-3 pb-3">
                <div className="col-md-6">
                    <p className="ml-5">
                        &nbsp;
                    </p> 
                </div>
                <div className="col-md-6 text-right">
                    <p className="mr-5">
                        &nbsp;
                    </p>
                </div>
            </div>
            <div className="row question-board py-4">
                <div className="col text-center question-text"> <strong>{ props.score }</strong> <br />{said}</div>
            </div>            
            <div className="row py-5 pb-4">
                <div className="col d-flex justify-content-center">
                    <Link to="/"><Button name="PLAY AGAIN" /></Link>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default EndBlock;