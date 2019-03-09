import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
    };
    render() {
        return (
            <div>
                <h2>Hello!</h2>
                <span>{this.state.count}</span>
                <button>Increment</button>
            </div>
        );
    }
}

export default Counter;