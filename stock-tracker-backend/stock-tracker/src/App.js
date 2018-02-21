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
        // this.state = {stocks: []}
    }

    // IF YOURE DOING AN AJAX CALL DO IT IN THIS LIFE CYCLE METHOD

    componentDidMount(){
        fetch('/stocks')
            .then(res => res.json())
            .then(stocks => this.setState({ ...stocks }));
            // console.log(this.state)

        // this.setState({stocks: [
        //     {
        //         stockTicker: 'FB',
        //         numberShares: 14
        //     },
        //     {
        //         stockTicker: 'AMZN',
        //         numberShares: 1000
        //     }
        // ]});
        // console.log(this.state)
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
