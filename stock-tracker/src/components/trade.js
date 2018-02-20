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
        console.log(this.refs.stockTicker.value);
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value="category">{category}</option>
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
                        <input type="text" ref="numberShares" />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Trade;
