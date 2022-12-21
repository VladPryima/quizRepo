import React from 'react';

const Start = ({ startQuiz, showStart }) => {
    return (
        <section className='text-white text-center bg-blue' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <a className="choosePage" href='https://vladpryima.github.io/home/'>&#129080; До вибору проєктів</a>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4'>Тестування з бази Javascript</h1>
                        <p>
                            <ul><h2>Опис і правила:</h2>
                                <li>В тесті 10 питань</li>
                                <li>На одне питання дається 60 секунд</li>
                                <li>Якщо час сплинув, на питання можна відповісти и подивитись результат</li>
                                <li>Може бути тільки одна відповідь</li>
                                <li>Правильна відповідь - 5 балів</li>

                            </ul>
                        </p>
                        <button onClick={startQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold">Розпочати</button>
                    </div>
                </div>
            </div>
        </section>
    );
};//При нажатии на startQuiz, setShowQuiz станвоится true, в него можно поместить и еще одно

export default Start;