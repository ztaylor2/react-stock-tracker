import React, { Component } from 'react';

class Stock extends Component {
  render() {
    if (this.props.stock) { 
        return (
          <li className="Stock">
            <strong>{this.props.stock.name}</strong>: 
            {this.props.stock.value}
          </li>
        );
    }
  }
}

export default Stock;
