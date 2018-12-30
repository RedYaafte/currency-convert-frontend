import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Graphic from './Components/Graphic/Graphic';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Graphic} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
