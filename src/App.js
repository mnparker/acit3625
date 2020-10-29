import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';

import ThemeContext from './ThemeContext'

import Home from './components/Home'
import About from './components/About'
import NavBar from './components/Navbar'
import Error from './components/Error'
import API from './components/API'



function App(props) {
  
  const themeHook = useState('light');
  
  return (

    <ThemeContext.Provider value = {themeHook}>
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
