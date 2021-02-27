import './GameBoard.css';
import Button from '../button/Button.js';
import { useEffect, useState } from 'react';

const GameBoard = (props) => {
    const [score, setScore] = useState(0);

    return (
        <div className="cont">
        <div className="game-board container">
            <div className="row pt-3 pb-3">
                <div className="col-md-6">
                    <p className="ml-5">
                        Life: 
                        <img className="ml-2" src="./heart.png" alt="heart"></img>
                        <img className="ml-1" src="./heart.png" alt="heart"></img>
                        <img className="ml-1"  src="./heart.png" alt="heart"></img>
                    </p> 
                </div>
                <div className="col-md-6 text-right">
                    <p className="mr-5">
                        Points: { score }
                    </p>
                </div>
            </div>
            <div className="row question-board py-3">
                <div className="col text-center question-text">{ props.currQuestion.date }</div>
            </div>
            <div className="row pt-4 pb-4">
                <div className="col-md-6 d-flex justify-content-end">
                    <Button onClick={props.checkAnswer} name="FOUND" />
                </div>
                <div className="col-md-6 ">
                    <Button onClick={props.checkAnswer} name="NEW" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default GameBoard;