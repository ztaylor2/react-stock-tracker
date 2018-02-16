import React, { Component } from 'react';

class Stock extends Component {
  render() {
    if (this.props.stock) { 
        return (
          <li className="Stock">
            {this.props.stock.name}
            {this.props.stock.value}
          </li>
        );
    }
  }
}

export default Stock;
