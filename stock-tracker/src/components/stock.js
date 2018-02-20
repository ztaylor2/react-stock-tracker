import React, { Component } from 'react';

class Stock extends Component {
    render() {
        if (this.props.stock) { 
            return (
                <li className="Stock">
                    <strong>{this.props.stock.stockTicker}</strong>: 
                    {this.props.stock.numberShares}
                </li>
            );
        }
    }
}

export default Stock;
