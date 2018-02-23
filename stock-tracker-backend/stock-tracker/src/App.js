import React, { Component } from 'react';
import Trade from './components/trade';
import Navigation from './components/navigation';
import Portfolio from './components/portfolio';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'


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
            <Router>
                <div className="App">
                    <Navigation />
                    <h1>Users</h1>
                    My app
                    <Route path='trade' component={ TradeComponent }/>
                    <Route path='portfolio' component={ PortfolioComponent }/>
                    <Trade addTrade={this.handleAddTrade.bind(this)}/>
                    <Portfolio stocks={this.state.stocks} />
                </div>
            </Router>
        );
    }
}

export default App;
