import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubirActor from './components/SubirActor';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>  
      <Route path="/subir-actor" component={SubirActor}/>
      </Router>
      
    </div>
  );
}

export default App;
