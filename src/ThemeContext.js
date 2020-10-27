import React from "react";


//first element in array is current theme mode
//second is function that would be used to update theme
const ThemeContext = React.createContext(["light", () => {}]);
export default ThemeContext;

