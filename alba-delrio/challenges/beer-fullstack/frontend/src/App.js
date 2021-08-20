
import './App.css';

function App() {
  fetch('http://localhost:5001/api/beers')
    .then((response)=> response.json())
    .then((beer)=>console.log(beer));

  return (
    <>
    <h1>hola</h1>
    </>
  );
}

export default App;
