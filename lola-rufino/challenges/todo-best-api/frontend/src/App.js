import { Provider} from 'react-redux';
import configureStore from './redux/store';
import './App.css';

function App() {
  return (
  <Provider store={configureStore()}></Provider>
  );
}

export default App;
