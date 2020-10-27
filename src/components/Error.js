import React, {useContext} from "react";
import AppTheme from "../Colours";
import ThemeContext from "../ThemeContext";

function Error(props) {

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];


  return (
    <div
    style = {{
      backgroundColor: `${currentTheme.backgroundColor}`,
      color: `${currentTheme.textColor}`,
  }}>
    <h1>Oops! Page not found!</h1>
    </div>
  );
}

export default Error;