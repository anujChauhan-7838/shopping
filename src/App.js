import React from 'react';
import logo from './logo.svg';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
function HatsPage(){
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

function NoMatch(){
  return (
    <div>
      <h1>This page not available</h1>
    </div>
  )
}
function App() {
  return (
    <Switch>
      <Route exact={true} path='/hats' component={HatsPage}/>
      <Route exact={true} path='/' component={HomePage}/>
      <Route><NoMatch /></Route>
    </Switch>
      
    
    
  );
}

export default App;
