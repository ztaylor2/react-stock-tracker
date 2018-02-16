import React, { Component } from 'react';
import Stock from './stock';


class Portfolio extends Component {

    render() {    
        let stock;
        if (this.props.stocks) {
            stock = this.props.stocks.map(a_stock => {
                return (
                    <Stock key={a_stock.name} stock={a_stock} />
                );
            });
        }
        return (
            <div className="Portfolio">
                {stock}
            </div>
        );
    }
}

export default Portfolio;
