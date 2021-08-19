/* eslint-disable linebreak-style */
import React from 'react';
import './AuthorQuiz.css';
import Books from './Books';

export default function AuthorQuiz() {
  const quiz = {
    books: [
      'The Shining',
      'The Adventure of Huckleberry Finn',
      'Macbeth',
      'IT',
    ],
    authorImage: 'https://i.ibb.co/Dzj948d/marktwain.jpg',
    authorName: 'Marc Twain',
  };
  return (
    <section className="container-quiz">
      <img
        className="img-thumbnail"
        src={quiz.authorImage}
        alt={quiz.authorName}
      />
      <Books books={quiz.books} />
    </section>
  );
}

/*
      'https://i.ibb.co/Dzj948d/marktwain.jpg',
    authorName: 'Marc Twain',
  };

  return (
    <>
      <section className="container-quiz">
        <picture>
          <img
            className="img-thumbnail"
            src="https://i.ibb.co/Dzj948d/marktwain.jpg"
            alt="marktwain"
          />
        </picture>
        <Books />
      </section>
    </>
  );
}

/*

        rightAnswer: 'Question 2',
        authorImage: 'https://es.wikipedia.org/wiki/Mark_Twain#/media/Archivo:Mark_Twain_by_AF_Bradley.jpg',
        authorName: 'Marc Twain',
    }

    function isRightAnswer(book) {
        quiz.rightAnswer.toLowerCase() === <book className="toLowerCase"></book>
    }

  return (
    <div className="container quiz">
      <img
      className="img-thumbnail"
      src={quiz.authorImage}
      alt={quiz.authorName}></img>
    </div>

      <Books books= {books} />
  );
}
*/
