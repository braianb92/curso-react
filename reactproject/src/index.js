//CommonJS
//const React = require("react");

//ES6
import React from "react";
//unicamente en este archivo importamos esta libreria
import ReactDOM from "react-dom";
import App from "./Layout/App";
import {Provider} from "react-redux";
import store from "./api/store";



//Conectar un componente con el DOM
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    //Un componente ejecutado en JSX
    document.getElementById("root")
);
