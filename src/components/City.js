import React, {useContext} from "react";
import AppTheme from "../Colours";
import ThemeContext from "../ThemeContext";

function City(props) {

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <div
    style = {{
      backgroundColor: `${currentTheme.backgroundColor}`,
      color: `${currentTheme.textColor}`,
  }}>
    <h1>City</h1>

  <ul>
   <li> Name: {props.data.full_name}</li>
  <li>Population: {props.data.population}</li>
  <li>Latitude: {props.data.latitude}</li>
  <li>Longitude: {props.data.longitude}</li>
  </ul>
  
    </div>
  );
}

export default City;