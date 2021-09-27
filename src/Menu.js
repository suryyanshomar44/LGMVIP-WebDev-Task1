import React from 'react'
import {Link, withRouter} from "react-router-dom"   //link Provides declarative, accessible navigation around your application.
import TextTransition, { presets } from "react-text-transition";

const currentTab = (history, path) => {  
    if(history.location.pathname === path) {
        return {color: "#dc143c"};
    }
    else {
        return {color: "#FFFFFF"};
    }
}

const Menu = ({history}) => {
  return (
    <div>
    <nav className="navbar">
        <div className="max-width">
            <div className="logo"><a href="#">Photo<span>Graphy</span></a></div>
        <ul className="menu">
            <li className="first">
                <a style={currentTab(history, "/")} href="/">Home</a>
            </li>
            <li>
                <a style={currentTab(history, "/gallery")} href="/gallery">Gallery</a>
            </li>
            <li>
                <a style={currentTab(history, "/features")} href="/features">Build</a>
            </li>
            <li>
                <a style={currentTab(history, "/about")} href="/about">About Me</a>
            </li>
        </ul>        
        </div>
    </nav>    
    </div>
  ) 
}
export default withRouter(Menu)