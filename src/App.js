import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu/Menu.js";
import Burger from "./components/Burger/Burger.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Project/Project.js";
import Experience from "./components/Experience/Experience.js";
import Contact from "./components/Contact/Contact.js";
import GlobalFonts from "./fonts/fonts";
import { Switch, Route, Redirect } from "react-router-dom";
import Particles from "react-particles-js";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <div>
        <GlobalFonts />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
