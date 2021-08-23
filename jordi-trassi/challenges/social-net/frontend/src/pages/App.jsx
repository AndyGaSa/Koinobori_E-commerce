import React from 'react';
import Userslist from '../components/Userslist';

import './App.css';

function App() {
  return (
    <>
      <body>
        <body className="app-body" />
        <img
          src="https://t3.ftcdn.net/jpg/02/97/46/82/240_F_297468224_q6xjks8YwJR6UJisN6WuW8OtPo3nRu07.jpg"
          alt="Social Net Paco Logo"
          className="app-body__logo"
        />
        <h1 className="app-body__title">Social Net Paco</h1>
        <h2 className="app-body__sub-title"> Pa Conocernos Todos!!</h2>
        <Userslist />
      </body>
      <footer className="app-footer" />
    </>
  );
}

export default App;
