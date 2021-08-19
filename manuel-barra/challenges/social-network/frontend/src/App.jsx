import React from 'react';
import Userslist from './components/Main/UsersList';
import Header from './components/Header/index';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Userslist />
      </main>

    </div>
  );
}

export default App;
