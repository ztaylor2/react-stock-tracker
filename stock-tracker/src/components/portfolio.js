import React, { Component } from 'react';
import Stock from './stock';


class Portfolio extends Component {

  render() {

    // console.log(this.props);

    let stock;
    if (this.props.stocks) {
        stock = this.props.stocks.map(a_stock => {
            return (
                <Stock stock={a_stock} />
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
