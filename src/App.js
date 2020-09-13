import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/about/About.js";
import Work from "./pages/work/Work.js";
import Contact from "./pages/contact/Contact.js";
import Home from "./pages/home/Home.js";
import Page from "./global/Page.js";
import Projects from "./pages/projects/Projects.js";

import "../assets/styles.css";

const App = () => (
  <div className="h-full bg-background">
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/work">
          <Page component={Work} />
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
