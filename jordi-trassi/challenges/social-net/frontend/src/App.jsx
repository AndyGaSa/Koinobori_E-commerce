import React from 'react';
import Userslist from './components/Userslist';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header" />
      <img src="https://t3.ftcdn.net/jpg/02/97/46/82/240_F_297468224_q6xjks8YwJR6UJisN6WuW8OtPo3nRu07.jpg" alt="Social Net Paco Logo" />
      <h1 className="app-header__title">Social Net Paco</h1>
      <h2 className="app-header__sub-title"> Pa Conocernos Todos!!</h2>
      <div className="app-body">
        <Userslist />
      </div>
      <footer className="app-footer" />
    </div>
  );
}

export default App;
