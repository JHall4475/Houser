import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Wizard from './Component/Wizard/Wizard';
import Dashboard from './Component/Dashboard/Dashboard';
import routes from './routes'



class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header>
       {routes}
      </div>
    );
  }
}

export default App;
