import React, {useContext} from "react";
import AppTheme from "../Colours";
import ThemeContext from "../ThemeContext";

function About(props) {

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div
    style = {{
      backgroundColor: `${currentTheme.backgroundColor}`,
      color: `${currentTheme.textColor}`,
  }}>
    <h2>About Me</h2>
    </div> );
}

export default About;