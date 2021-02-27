import './GameBoard.css';
import Button from '../button/Button.js';

const GameBoard = () => {
    return (
        <div className="game-board container">
            <div className="row pt-5">
                <div className="col text-center question-text">NAMA GAME E OPO AJG</div>
            </div>
            <div className="row pt-5 pb-5">
                <div className="col-md-7 d-flex justify-content-end">
                    <Button name="START" />
                </div>
            </div>
        </div>
    )
}

export default GameBoard;