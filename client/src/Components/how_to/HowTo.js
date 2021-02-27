import React from 'react';
import './HowTo.css';

const HowTo = () =>{
    return(<>
        <div className="cont-how">
            <div className="how">
                <h3 className="d-flex justify-content-center">How to Play</h3>
                <p>A Date (ex: 1 January 2001) will be shown to you, one at a time. If you’ve found that date 
                    more than once, click FOUND and if it’s a new word click NEW. If you make a wrong choice,
                    you will lose one life point, and if you lose all of your life point the game will be over.
                </p>
                <p id="akhir">
                    Note that every time you found a new date, you can see a trivial information about some 
                    important events that happened on that date. HAVE FUN!!
                </p>
            </div>
        </div>
    </>);
}

export default HowTo;