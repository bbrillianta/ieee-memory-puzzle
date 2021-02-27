import './GameBoard.css';
import Button from '../button/Button.js';

const GameBoard = () => {
    return (
        <div className="game-board container">
            <div className="row">
                <div className="col-md-6">Life</div>
                <div className="col-md-6 text-right">Points</div>
            </div>
            <div className="row question-board py-2">
                <div className="col text-center question-text">1 January 2021</div>
            </div>
            <div className="row pt-5 pb-4">
                <div className="col-md-6 d-flex justify-content-end">
                    <Button name="FOUND" />
                </div>
                <div className="col-md-6 ">
                    <Button name="NEW" />
                </div>
            </div>
        </div>
    )
}

export default GameBoard;