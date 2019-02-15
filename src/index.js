import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Article from "./components/article"

ReactDOM.render(
    <div>
        <Header name="Maddie" />
        <Header name="David" />
        <Article articleTitle="I am an article title!" />
        <Article articleTitle="I am an another!" />
    </div>,
    document.getElementById('root')
);