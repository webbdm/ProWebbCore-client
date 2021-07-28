import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";
import Edit from "./pages/edit/Edit.js";
import Home from "./pages/home/Home.js";
import Life from "./pages/life/Life.js";
import Nutrition from "./pages/nutrition/Nutrition.js";
import Page from "./global/Page.js";
import Projects from "./pages/projects/Projects.js";
import Work from "./pages/work/Work.js";

import "../assets/styles.css";
import AuthRoute from "./global/auth/AuthRoute.js";

const App = () => (
  <div className="h-full bg-background">
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/life">
          <Life />
        </Route>
        <Route path="/nutrition">
          <Nutrition />
        </Route>
        <Route path="/about">
          <Page component={About} />
        </Route>

        <Route path="/work">
          <Page component={Work} />
        </Route>

        <Route path="/projects">
          <Page component={Projects} />
        </Route>

        <Route path="/contact">
          <Page component={Contact} />
        </Route>

        <Route path="/edit">
          <AuthRoute>
            <Page component={Edit} />
          </AuthRoute>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
