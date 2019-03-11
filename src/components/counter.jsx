import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 8,
        imageURL: 'https:picsum.photos/200'
    };
    render() {
        return (
            <div>
                <img src={this.state.imageURL} alt="" />
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-danger btn-sm">Increment</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;