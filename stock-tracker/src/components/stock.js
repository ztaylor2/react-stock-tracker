import React, { Component } from 'react';

class Stock extends Component {
  render() {
    let stock;
    if (this.props.stock) {
        stock = this.props.stock.map(a_stock => {
            console.log(project);
        });
    }
    return (
      <li className="Stock">
        My Stock
      </li>
    );
  }
}

export default Stock;
