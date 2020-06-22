import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./global/navigation/Navigation.js";

import About from "./pages/about/About.js";
import Background from "./pages/background/Background.js";
import Contact from "./pages/contact/Contact.js";
import Home from "./pages/home/Home.js";
import Projects from "./pages/projects/Projects.js";

import "./App.sass";

const App = () => (
  <div className="app-container">
    <Navigation />
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/background">
          <Background />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
