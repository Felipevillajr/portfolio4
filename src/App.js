import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
