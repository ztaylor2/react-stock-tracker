import React, { Component } from 'react';
import Stock from './stock';


class Portfolio extends Component {

  render() {

    console.log(this.props);

    let stock;
    if (this.props.stock) {
        stock = this.props.stock.map(a_stock => {
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
