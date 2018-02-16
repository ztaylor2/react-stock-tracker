import React, { Component } from 'react';
import Stock from './stock';


class Portfolio extends Component {

  render() {

    // console.log(this.props);

    let stock;
    if (this.props.stocks) {
        stock = this.props.stocks.map(a_stock => {
            console.log(a_stock);
            <Stock />
        });
    }
    return (
      <div className="Portfolio">
        My Portfolio
      </div>
    );
  }
}

export default Portfolio;
