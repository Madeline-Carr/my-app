import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Hello {this.props.name + this.props.lastName}!</h1>
            </div>
        );
    }
}
export default Header;