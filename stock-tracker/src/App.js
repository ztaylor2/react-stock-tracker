import React, { Component } from 'react';
import Projects from './components/projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My app
        <Projects />
      </div>
    );
  }
}

export default App;
