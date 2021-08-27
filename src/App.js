import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import Work from "./Pages/Work/Work";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About-the-Creator" component={About} />
        <Route exact path="/Portfolio" component={Work} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
