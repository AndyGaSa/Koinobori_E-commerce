import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/perfil">
          <Perfil />
        </Route>
      </Switch>
<<<<<<< HEAD
      <Footer />
    </>
  );
}
=======
    </Router>
    <Footer />
  </>
);
>>>>>>> bcbea970c5fdf63901e4a989414637985f0ba9c5

export default App;
