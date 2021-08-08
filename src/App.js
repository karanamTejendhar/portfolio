import React  from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//components
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Intro from './components/Intro';
import Project from './components/Project';
import About from './components/About';

//style
import './App.css';
import './Reset.css';


export default function App() {
  return (
    <Router>
        <Nav />
        <Switch>
        
          <Route path="/" exact component={Homepage}>
            <Home />
          </Route>
          <Route path="/Intro" exact component={Intro}>
            <Intro />
          </Route>
          <Route path="/About" component={About}>
            <About />
          </Route>
          <Route path="/Project" exact component={Project}>
            <Project />
          </Route>
          <Redirect to={"/"} />
        </Switch>
      </Router>
  );
}

const Home = () => (
  <Homepage />
);



// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "predeploy": "npm run build",
//   "deploy": "gh-pages -d buil


//in index.js make register to unregister 