import React, { Component } from 'react';

class Trade extends Component {
    render() {
        return (
            <div>
                <h3>Component to place trades</h3>
                <form>
                    <div>
                        <label>Buy/Sell?</label>
                        <select ref="orderType" />
                    </div>
                    <div>
                        <label>Stock Ticker</label>
                        <input type="text" ref="stockTicker" />
                    </div>
                    <div>
                        <label>Shares</label>
                        <input type="text" ref="numberShares" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Trade;
