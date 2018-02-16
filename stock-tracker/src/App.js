import React, { Component } from 'react';
import Trade from './components/trade';
import Navigation from './components/navigation';
import Portfolio from './components/portfolio';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            stocks: []
        }
    }

    componentWillMount(){
      this.setState({stocks: [
                        {
                    name: 'FB',
                    value: 14
                },
                {
                    name: 'AMZN',
                    value: 1000
                }
      ]});
    }

  render() {
    return (
      <div className="App">
        <Navigation />
        My app
        <Trade />
        <Portfolio stocks={this.state.stocks} />
      </div>
    );
  }
}

export default App;
