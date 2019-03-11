import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        imageURL: 'https:picsum.photos/200'
    };
    render() {
        return (
            <div>
                <h2>Hello!</h2>
                <img src={this.state.imageURL} alt="" />
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-danger btn-sm">Increment</button>
            </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;