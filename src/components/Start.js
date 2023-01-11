import React from 'react';

const Start = ({ startQuiz, showStart }) => {
    return (
        <section className='text-white text-center bg-blue' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <a className="choosePage" href='https://vladpryima.github.io/home/'>&#129080; До вибору проєктів</a>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4'>Тестування з основ Javascript</h1>
                        <p>
                            <ul><h2>Опис і правила:</h2>
                                <li>В тесті 10 питань</li>
                                <li>Щоб перейти до наступного питання, треба обрати відповідь на поточне</li>
                                <li>На одне питання дається 60 секунд</li>
                                <li>Якщо час сплинув, на питання можна відповісти і подивитись результат</li>
                                <li>Може бути тільки одна правильна відповідь</li>
                                <li>Правильна відповідь - 5 балів</li>

                            </ul>
                        </p>
                        <button onClick={startQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold">Розпочати</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;
