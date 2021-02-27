import { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [questions, setQuestions] = useState([
    {
      date: "1 January 2020",
      desc: "a",
      url: "https://www.wikipedia.org/a"
    },
    {
      date: "2 January 2020",
      desc: "b",
      url: "https://www.wikipedia.org/b"
    },
    {
      date: "3 January 2020",
      desc: "c",
      url: "https://www.wikipedia.org/c"
    },
    {
      date: "4 January 2020",
      desc: "d",
      url: "https://www.wikipedia.org/d"
    },
    {
      date: "5 January 2020",
      desc: "e",
      url: "https://www.wikipedia.org/e"
    },
    {
      date: "6 January 2020",
      desc: "f",
      url: "https://www.wikipedia.org/f"
    },
    {
      date: "7 January 2020",
      desc: "g",
      url: "https://www.wikipedia.org/g"
    },
    {
      date: "8 January 2020",
      desc: "h",
      url: "https://www.wikipedia.org/h"
    }
  ]);
  const [currInfo, setCurrInfo] = useState();

  const randStep = () => Math.floor(Math.random() * 4 + 2);

  const [seenStep, setSeenStep] = useState(randStep);

  const randQuestion = (q) => Math.floor(Math.random() * q.length);

  const [currQuestion, setCurrQuestion] = useState(questions[randQuestion(questions)]);

  const incStep = () => {
    if(step + 1 === seenStep) {
      setStep(0); 
      setSeenStep(randStep); 
      setCurrQuestion(questions[randQuestion(questions)]);
    } else {
      setStep(step + 1);
      setCurrQuestion(questions[randQuestion(questions)]);
    }
  }

  const checkAnswer = (event) => {
    const answer = (event.target.innerHTML);
    setCurrInfo({
      desc: currQuestion.desc,
      url: currQuestion.url
    });
    incStep();
  }

  return (
    <div className="App">
      <p>Seen Answer : { seenStep }</p>
      <p>Step : { step }</p>
      <p>{ currQuestion.date }</p>
      <button onClick= { checkAnswer }>Found</button>
      <button onClick= { checkAnswer }>New</button>
      <p>{ currInfo?.desc }</p>
      <p>{ currInfo?.url }</p>
    </div>
  );
}

export default App;
