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
          <Route path={process.env.PUBLIC_URL + '/Home'} exact component={Homepage}>
            <Home />
          </Route> 
          {/* <Route path="/portfolio/Home" exact component={Homepage}>
            <Home />
          </Route> */}
          <Route path={process.env.PUBLIC_URL +"/Intro"} exact component={Intro}>
            <Intro />
          </Route>
          <Route path={process.env.PUBLIC_URL +"/About"} component={About}>
            <About />
          </Route>
          <Route path={process.env.PUBLIC_URL +"/Project"} exact component={Project}>
            <Project />
          </Route>
          <Redirect to={process.env.PUBLIC_URL +"/Home"} />
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
//   "deploy": "gh-pages -d build


//in index.js make register to unregister 