import React from 'react';
import './HowTo.css';

const HowTo = () =>{
    return(<>
        <div className="cont-how">
            <div className="how">
                <h3 className="d-flex justify-content-center">How to Play</h3>
                <p>A Date (ex: 1 January 2001) will be shown to you, one at a time. If you’ve <strong>found</strong> that date 
                    <strong> more than once</strong> during the game, click <strong>FOUND</strong> and if it’s a <strong>new word</strong>, click <strong>NEW</strong>. If you make a wrong choice,
                    you will lose one life point, and if you lose all of your life point the game will be over.
                </p>
                <p id="akhir">
                    Note that we provide trivial information about important events that happened on each date so that you can play and learn history at the same time. You can see that information after you click FOUND or NEW, Have Fun !
                </p>
            </div>
        </div>
    </>);
}

export default HowTo;