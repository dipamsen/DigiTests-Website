import React from 'react';
import './App.css';

import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
        <Route path="/login" exact>
          <LoginScreen />
        </Route>
      </Router>
    );
  }
}

export default App;
