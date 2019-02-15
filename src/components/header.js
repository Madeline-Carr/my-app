import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div class="container">
                <h1>Hello {this.props.name}!</h1>
            </div>
        );
    }
}
export default Header;