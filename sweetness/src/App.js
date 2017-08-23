import React, { Component } from 'react';
import './App.css';

import MainContainer from './components/MainContainer'
import Sidebar from './components/Sidebar'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Sidebar />
        <MainContainer />
      </div>
    );
  }
}

export default App;
