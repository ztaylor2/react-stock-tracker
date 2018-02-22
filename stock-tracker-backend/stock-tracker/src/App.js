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

    componentDidMount(){
        fetch('/stocks', {
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }

            })
            .then(res => res.json())
            .then(stocks => this.setState({ ...stocks }));
    }

    handleAddTrade(trade) {
        let stocks = this.state.stocks;
        stocks.push(trade);
        this.setState({stocks:stocks});
    }

    render() {
        return (
            <div className="App">
                <Navigation />
                <h1>Users</h1>
                My app
                <Trade addTrade={this.handleAddTrade.bind(this)}/>
                <Portfolio stocks={this.state.stocks} />
            </div>
        );
    }
}

export default App;
