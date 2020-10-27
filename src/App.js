import React, { useState, useContext} from "react";
import { Route, Switch } from 'react-router-dom';

import { createGlobalStyle} from "styled-components"
import ThemeContext from './ThemeContext'
import AppTheme from "./Colours";

import Home from './components/Home'
import About from './components/About'
import NavBar from './components/Navbar'
import Error from './components/Error'
import API from './components/API'



function App(props) {
  
  const themeHook = useState('light');
  
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  
  const GlobalStyles = createGlobalStyle`
  body {
    background: ${currentTheme.body};
  }
  `
  return (

    <ThemeContext.Provider value = {themeHook}>
      <GlobalStyles/>
      <NavBar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/api' component={API} />
          <Route component={Error} />
        </Switch>
    </ThemeContext.Provider>
   
  );
}

export default App;
