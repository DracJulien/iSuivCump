import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Header from './components/global/Header';

function App() {
  return (
    <Router>
      <Header />  {/* Composant global inclus */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />  {/* Route pour page 404 */}
      </Switch>
    </Router>
  );
}

export default App;
