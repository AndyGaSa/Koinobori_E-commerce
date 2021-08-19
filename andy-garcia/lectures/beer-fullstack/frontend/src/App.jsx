import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/api/nonAlcoholic')
      .then((response) => {
        console.log(response.jors);
      });
  }, []);
  return (
    <div className="App" />
  );
}

export default App;
