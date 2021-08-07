import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import Perfil from './pages/perfil/Perfil';
import FormularioEventos from './pages/formularioEventos/FormularioEventos';
import NotFound from './pages/NotFound';
import Footer from './components/footer/Footer';
import LogInPage from './pages/LogInPage/LogInPage';
import './App.css';

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <LogInPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/perfil">
          <Perfil />
        </Route>
        <Route path="/addevent">
          <FormularioEventos />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
    <Footer />
  </>
);

export default App;
