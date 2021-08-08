import React from 'react';
import './../App.css';
import Intro from './Intro'
import About from './About'
import Project from './Project'
import Footer from './Footer'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Darkmode/GlobalStyles"
import { lightTheme, darkTheme } from "./Darkmode/Themes"
import {UseDarkMode} from './Darkmode/UseDarkMode'
import Toggle from './Darkmode/Toggle'

const Homepage = () => {
    const [theme, themeToggler/*, mountedComponent*/] = UseDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    return (
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <div className="wrapper">
          <div className="togglePosition">
            <div className="toggleBtn">
              <Toggle theme={theme} toggleTheme={themeToggler} />
            </div>
          </div>
        </div>
        <div className="main">
          <Intro />
          <Project />
          <About />
          {/* <Contact /> */}
          <Footer />
        </div>
      </ThemeProvider>
    );
  }

  
export default Homepage;
