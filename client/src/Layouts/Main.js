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
        fetchData();
    }, []);

    const [currQuestion, setCurrQuestion] = useState(questions[0]);

    const [prevQuestion, setPrevQuestion] = useState();

    useEffect(() => setCurrQuestion(questions[0]), [questions[0]]);

    const randQuestion = () => questions[Math.floor(Math.random() * questions.length)];

    const checkAnswer = (e) => {
        setPrevQuestion(currQuestion);
        setCurrQuestion(randQuestion());
    }

    return(<>
        <div className="container-fluid back">
            <GameBoard 
                questions={questions} 
                currQuestion={currQuestion} 
                setCurrQuestion={setCurrQuestion} 
                checkAnswer={checkAnswer}
            />
            <EventList prevQuestion={prevQuestion} checkAnswer={checkAnswer} currQuestion={currQuestion} />
        </div>
    </>);
}

export default Main;