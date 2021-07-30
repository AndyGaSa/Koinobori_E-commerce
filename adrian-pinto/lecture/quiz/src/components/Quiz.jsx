/* eslint-disable react/style-prop-object */
import React from 'react';
import Books from './Books';
import '../style/quiz.css';

const Quiz = () => (
  <section>
    <aside>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg" alt="Mark Twain" />
    </aside>
    <Books />
  </section>

);

export default Quiz;
