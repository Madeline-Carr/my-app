import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";

ReactDOM.render(
    <div>
        <Header name="Maddie" />
        <Header name="David" />
    </div>,
    document.getElementById('root')
);