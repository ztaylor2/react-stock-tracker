import React, { Component } from 'react';
import Projects from './components/projects';
import Trade from './components/trade';
import Navigation from './components/navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        My app
        <Projects />
        <Trade />
      </div>
    );
  }
}

export default App;
