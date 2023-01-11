import React from 'react';

const Result = ({ showResult, quizs, marks, startOver, time }) => {
    let secs = time;
    let min = 0;
    let res = "1";
    
    

    if (time > 60) {
        while (secs > 60) {
            ++min;
            secs = secs - 60;
        }
    }

    if ( min > 0) {
        res = `${min} хв, ${secs} сек`
    }
    else {

        res = `${secs} сек`;

    }

    return (
        <section className="bg-dark text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <a className="choosePage" href='https://vladpryima.github.io/home/'>&#129080; До вибору проєктів</a>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > (quizs.length * 5 / 2) ? 'bg-success' : 'bg-danger'}`}>
                        
                            <h1 className='mb-2 fw-bold'>{
                               
                            marks > (quizs.length * 5 / 2) ? 'Йой, круть!' : 'Ну таке...'
                            }
                            </h1>
                            <h3 className='mb-3 fw-bold'>Ти набрав {marks} з {quizs.length * 5} балів, за {res}</h3>

                            <button onClick={startOver} className='btn py-2 px-4 btn-light fw-bold d-inline'>Спробувати ще</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;
