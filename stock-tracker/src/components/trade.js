import React, { Component } from 'react';

class Trade extends Component {
    render() {
        return (
            <div>
                <h3>Component to place trades</h3>
                <form>
                    <div>
                        <label>Title</label>
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>Shares</label>
                        <input type="text" ref="shares" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Trade;
