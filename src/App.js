import React, { useEffect, useState } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  // All Quizs, Current Question, Index of Current Question, Answer, Selected Answer, Total Marks
  //Усі квізи, поточне питання, індекс поточного питання, відповідь, обране питання, бали
  const [quizs, setQuizs] = useState([]); //Обьект с вопросами-ответами
  const [question, setQuesion] = useState({}); //Обьект c id, вопросами и ответом
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [marks, setMarks] = useState(0);

  // Стейти для відображення
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [startTimer, setStartTimer] = useState(false); //Старт/Стоп таймера
//Стейт часу, за який пройдено тест
  const [time, setTime] = useState(0);
  //Стейт таймера
  const [timeLeft, setTimeLeft] = useState(60);
 

  //Завантажуємо JSON
  useEffect(() => {
    fetch('quiz.json')
      .then(res => res.json())
      .then(data => setQuizs(data))
  }, []);

  
  useEffect(() => {
    //Якщо довжина quizs.length меньше за question.index - завантажуємо питання
    if (quizs.length > questionIndex) {
      setQuesion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex])




  
//Пропс Start.quiz
//Керує трьома станам - false Start.js i  показом Quiz.js, а також старт таймера
  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
    setStartTimer(true); //Установлен, чтобы таймер не стартовал сам по себе
  }

  //Перевірка відповіді, застосування стилів та підрахунок балів
  const checkAnswer = (event, selected  ) => {
    if (!selectedAnswer) {
      setCorrectAnswer(question.answer);
      setSelectedAnswer(selected);

      if (selected === question.answer) {
        event.target.classList.add('bg-success');
        setMarks(marks + 5);
      } else {
        event.target.classList.add('bg-danger');
      }
    }

  }

  // onClick для наступного питання (пропс Quiz.js) - прибирає обрану відповідь і стилі відповідей, перезавтанжуючи таймер
  const nextQuestion = () => {
    setCorrectAnswer('');
    setSelectedAnswer('');
    const wrongBtn = document.querySelector('button.bg-danger');
    wrongBtn?.classList.remove('bg-danger');
    const rightBtn = document.querySelector('button.bg-success');
    rightBtn?.classList.remove('bg-success');
    setQuestionIndex(questionIndex + 1);
    setTimeLeft(60);
    setStartTimer(true);
  }

  //onClick для показу результату (пропс Quiz.js)
  const showTheResult = () => {
    setShowResult(true);
    setShowStart(false); //display none
    setShowQuiz(false); //display none
  }

  //onClick для рестарту (пропс Result.js)
  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setCorrectAnswer('');
    setSelectedAnswer('');
    setQuestionIndex(0);
    setMarks(0);
    const wrongBtn = document.querySelector('button.bg-danger');
    wrongBtn?.classList.remove('bg-danger');
    const rightBtn = document.querySelector('button.bg-success');
    rightBtn?.classList.remove('bg-success');
    setTimeLeft(60);
    setStartTimer(true);
    setTime(1);
  }

  return (
    <>
      {/*Старт-пейдж */}
      <Start
        startQuiz={startQuiz}
        showStart={showStart}
      />

      {/* Квіз */}
      <Quiz
        showQuiz={showQuiz}
        question={question}
        quizs={quizs}
        checkAnswer={checkAnswer}
        correctAnswer={correctAnswer}
        selectedAnswer={selectedAnswer}
        questionIndex={questionIndex}
        nextQuestion={nextQuestion}
        showTheResult={showTheResult}
        startTimer={startTimer}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        setStartTimer={setStartTimer}
        setTime={setTime}
        time={time}
      />

      {/* Результат */}
      <Result
        showResult={showResult}
        quizs={quizs}
        marks={marks}
        startOver={startOver}
        time={time} />
        
    </>
  );
}

export default App;
