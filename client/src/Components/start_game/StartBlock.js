import './StartBlock.css';
import Button from '../button/Button.js';
import {
    Link
  } from 'react-router-dom';

const StartBlock = () => {
    return (
        <div className="cont-start">
            <div className="start-board container">
                <div className="row d-flex justify-content-center pt-3">
                    <img className="log" src="./logorevisited.png"></img>
                </div>
                <div className="row pt-2 pb-5">
                    <div className="col-md-7 d-flex justify-content-end">
                    <Link to="/game"><Button name="START"/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartBlock;