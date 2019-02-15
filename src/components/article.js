import React from "react";

class Article extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.articleTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quas veniam dolore? Omnis, perferendis quasi quo dolor consectetur deleniti nobis sed quod recusandae delectus ex consequuntur praesentium, facere atque vitae.</p>
            </div>
        );
    }
}

export default Article;

