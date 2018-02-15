import React, { Component } from 'react';
import Projects from './components/projects';
import Trade from './components/trade';
import Navigation from './components/navigation';
import Portfolio from './components/portfolio';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            stocks: [
                {
                    name: 'FB',
                    value: 14
                },
                {
                    name: 'AMZN',
                    value: 1000
                }
            ]
        }
    }

  render() {
    return (
      <div className="App">
        <Navigation />
        My app
        <Projects />
        <Trade />
        <Portfolio stocks={this.state.stocks} />
      </div>
    );
  }
}

export default App;
