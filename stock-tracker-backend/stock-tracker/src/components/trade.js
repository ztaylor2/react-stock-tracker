import React, { Component } from 'react';

class Trade extends Component {
    constructor() {
        super()
        this.state = {
            newTrade: {}
        }
    }

    static defaultProps = {
        categories: ['Buy', 'Sell']
    }

    handleSubmit(e) {


        // getting current stock price
        // must import jquery
        // var symbol='goog';
        // var callback = function(data) {
        //         var price=data.query.results.span[0].content;
        //         alert('Stock Price: ' + price);
        //     };

        // var url = 'http://query.yahooapis.com/v1/public/yql';
        // // this is the lovely YQL query (html encoded) which lets us get the stock price:
        // // select * from html where url="http://finance.yahoo.com/q?s=goog" and xpath='//span[@id="yfs_l10_goog"]'
        // var data = "q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3D" + symbol + "%22%20and%20xpath%3D'%2F%2Fspan%5B%40id%3D%22yfs_l10_" + symbol + "%22%5D'&format=json";
        // $.getJSON(url, data, callback);



        if (this.refs.stockTicker.value === '') {
            alert('Please enter a stock ticker to place a trade.')
        } else if (isNaN(this.refs.numberShares.value)) {
            alert('Please enter a number for the number of shares.')
        } else {
            this.setState({newTrade: {
                stockTicker: this.refs.stockTicker.value,
                numberShares: this.refs.numberShares.value
            }}, function(){
                this.props.addTrade(this.state.newTrade);
            });
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return (
            <div>
                <h3>Component to place trades</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Buy/Sell?</label>
                        <select ref="orderType">
                            {categoryOptions}
                        </select>
                    </div>
                    <div>
                        <label>Stock Ticker</label>
                        <input type="text" ref="stockTicker" />
                    </div>
                    <div>
                        <label>Shares</label>
                        <input ref="numberShares" />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Trade;
