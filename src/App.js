import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "App.css";
import Home from "components/home";
import About from "components/about";
import Navigation from "components/nav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
