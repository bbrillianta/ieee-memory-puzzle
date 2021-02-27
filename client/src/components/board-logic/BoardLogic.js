import { useEffect, useState } from 'react';

const BoardLogic = () => {
    const [questions, setQuestions] = useState([]);
  const [currInfo, setCurrInfo] = useState();

  // useEffect(() => {
  // }, [setQuestions]);

  const randQuestion = (q) => Math.floor(Math.random() * q.length);

  const [currQuestion, setCurrQuestion] = useState(questions[randQuestion(questions)]);

  const checkAnswer = (event) => {
    const answer = (event.target.innerHTML);
    setCurrInfo({
      desc: currQuestion.desc,
      url: currQuestion.url
    });
  }

  return (
    <div>
      <button onClick= { checkAnswer }>Found</button>
      <button onClick= { checkAnswer }>News</button>
      <p>{ currInfo?.desc }</p>
      <p>{ currInfo?.url }</p>
    </div>
  );
}