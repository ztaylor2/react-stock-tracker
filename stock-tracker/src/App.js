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

    // IF YOURE DOING AN AJAX CALL DO IT IN THIS LIFE CYCLE METHOD

    componentWillMount(){
        this.setState({stocks: [
            {
                stockTicker: 'FB',
                numberShares: 14
            },
            {
                stockTicker: 'AMZN',
                numberShares: 1000
            }
        ]});  
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
                My app
                <Trade addTrade={this.handleAddTrade.bind(this)}/>
                <Portfolio stocks={this.state.stocks} />
            </div>
        );
    }
}

export default App;
