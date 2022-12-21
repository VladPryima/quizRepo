import React, { useState, useEffect } from 'react';

const Quiz = ({ showQuiz, question, quizs, checkAnswer, correctAnswer, selectedAnswer, questionIndex, nextQuestion, showTheResult, start, timeLeft, setTimeLeft, setStart }) => {

    
   //const [timeLeft, setTimeLeft] = useState(sec);
   const seconds = timeLeft;
  
 
   let arr = [];
   
   useEffect(() => {
    
     const interval = setInterval( () => {
        start && setTimeLeft((timeLeft) => timeLeft >= 1 ? timeLeft - 1 : 0) 
    }, 
    1000);
    
   arr.push(interval);
   console.log(arr);
    
   return () => {
    clearInterval(interval);
   }

   }, [start])

   
  

    return (
        
        <section className="bg-dark text-white" style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
            <a className="choosePage" href='https://vladpryima.github.io/home/'>&#129080; До вибору проєктів</a>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="card p-4" style={{ background: 'rgb(23 68 78)', borderColor: 'yellow' }}>
                            <div className="d-flex justify-content-between gap-md-3">
                                <h5 className='mb-2 fs-normal lh-base'>{question?.question}</h5>
                                <h5>Таймер: {seconds}</h5> 
                                <h5 style={{ color: '#60d600', width: '100px', textAlign: 'right' }}>{quizs.indexOf(question) + 1} / {quizs?.length}</h5>
                            </div>
                            <div>
                                {
                                    question?.options?.map((item, index) => <button
                                        key={index}
                                        className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark ${correctAnswer === item && 'bg-success'}`}
                                        onClick={(event) => {
                                            
                                           setStart(false);
                                            checkAnswer(event, item);
                                        }
                                        
                                        }
                                    >
                                        {item}
                                    </button>)
                                }
                            </div>

                            { 

                               
                                (questionIndex + 1) !== quizs.length && seconds > 1 ? 
                                    <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={nextQuestion} disabled={!selectedAnswer}>Наступне питання</button>
                                    :
                                    <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={showTheResult} disabled={!selectedAnswer}>Показати результат</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz;