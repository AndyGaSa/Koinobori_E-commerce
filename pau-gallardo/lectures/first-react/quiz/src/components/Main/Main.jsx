import React, { useState } from 'react';
import './Main.css';

export default function Main() {
  const [userAnswer, setUserAnswer] = useState(null);

  const [quiz] = useState({
    rightAnswer: 'The adventures of Huckleberry Finn',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg',
    authorName: 'Marc Twain',
  });

  function isRightAnswer(book) {
    const isEquals = quiz.rightAnswer.toLowerCase() === book.toLowerCase();
    const userAnswerClass = isEquals
      ? 'quiz--success'
      : 'quiz--error';

    setUserAnswer(userAnswerClass);
  }

  return (
    <>
      <div className={`d-flex contenedor-main ${userAnswer}`}>
        <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain,_Brady-Handy_photo_portrait,_Feb_7,_1871,_cropped.jpg" alt="" />
        <ul className="contenedor__lista">
          <li className="list-group-item" validate={isRightAnswer}>The shining</li>
          <li className="list-group-item" validate={isRightAnswer}>The adventures of Hucleberry Finn</li>
          <li className="list-group-item" validate={isRightAnswer}>Macbeth</li>
          <li className="list-group-item" validate={isRightAnswer}>IT</li>
        </ul>
      </div>
    </>
  );
}
