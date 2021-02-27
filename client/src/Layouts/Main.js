import React, { useEffect, useState } from 'react';
import './Main.css';

import EventList from '../Components/event_list/EventList';
import GameBoard from '../Components/game-board/GameBoard';

import EndBlock from '../Components/end_game/EndBlock';

const Main = () =>{
    const fetchData = async () => {
        const response = await fetch('http://localhost:3001/dates');
        const data = await response.json();
        await setQuestions(data.foundDocs);
    }

    const [questions, setQuestions] = useState([{}]);

    useEffect(() => {
        localStorage.clear();
        fetchData();
    }, []);

    const [currQuestion, setCurrQuestion] = useState(questions[0]);

    const [prevQuestion, setPrevQuestion] = useState();

    useEffect(() => setCurrQuestion(questions[0]), [questions[0]]);

    const randQuestion = () => questions[Math.floor(Math.random() * questions.length)];

    const [lives, setLives] = useState(3);

    const [score, setScore] = useState(0);

    const checkAnswer = (e) => {
        const answer = e.target.innerHTML;
        const check = currQuestion.date;
        const item = localStorage.getItem(check);
        if(!item) {
            localStorage.setItem(check, true);
            if(answer == "FOUND") setLives(lives - 1);
            else setScore(score + 1);
        } else {
            if(answer == 'NEW') setLives(lives - 1);
            else setScore(score + 1);
        }
        console.log(lives);
        for (var i = 0; i < localStorage.length; i++){
            console.log(localStorage.key(i));
        }
        setPrevQuestion(currQuestion);
        setCurrQuestion(randQuestion());
    }

    return(<>
        <div className="container-fluid back">
            { lives > 0 
            ? <div>
                <GameBoard 
                questions={questions} 
                currQuestion={currQuestion} 
                setCurrQuestion={setCurrQuestion} 
                checkAnswer={checkAnswer}
                score={score}
                lives={lives}
                 />
                <EventList prevQuestion={prevQuestion} checkAnswer={checkAnswer} currQuestion={currQuestion} />
             </div>
            : <EndBlock score={score} />
            }
        </div>
    </>);
}

export default Main;