import React from "react";

class Article extends React.Component {

    getText() {
        return (<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quas veniam dolore? Omnis, perferendis quasi quo dolor consectetur deleniti nobis sed quod recusandae delectus ex consequuntur praesentium, facere atque vitae.</p>);
    }


    render() {
        return (
            <div className="container">
                <h2>{this.props.articleTitle}</h2>
                <p>{this.getText()}</p>
            </div>
        );
    }
}

export default Article;

