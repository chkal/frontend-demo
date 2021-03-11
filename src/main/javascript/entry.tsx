import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "../css/style.css";

// create anchor element for react
const rootElement = document.createElement( "div" );
document.body.appendChild( rootElement );

// bootstrap react
ReactDOM.render( <App/>, rootElement );
