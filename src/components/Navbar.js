import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppTheme from "../Colours";
import ThemeContext from "../ThemeContext";
import ThemeToggler from "../ThemeToggler";

function NavBar(props) {

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const link_style = {
    backgroundColor: `${currentTheme.backgroundColor}`,
    color: `${currentTheme.textColor}`,
    borderColor: `${currentTheme.borderColor}`
}
  return (
    <div style = {{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`
    }}>
        <Link style={link_style} className="btn btn__primary btn__sm" to="/">Home</Link>
        <Link style={link_style} className="btn btn__primary btn__sm" to="/about">About</Link>
        <Link style={link_style} className="btn btn__primary btn__sm" to="/api">API</Link>

        <ThemeToggler />
    </div>
    );
}

export default NavBar;