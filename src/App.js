import React from 'react';
import './App.css';
import Apphome from './components/Apphome';
import Log from './components/Log';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
      <Router>
        <Route exact path="/" render={(props) => <Apphome {...props}/>}/>
        <Route path="/Log" render ={(props) => <Log {...props}/>}/>
      </Router>
    )
}

export default App;
