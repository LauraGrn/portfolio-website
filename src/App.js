import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "App.css";
import Home from "components/home";
import About from "components/about";
import Contact from "components/contact";
import Pose from "components/pose";
import Navigation from "components/nav";
import Test from "components/test";

class App extends Component {
  state = { homeAnimation: false };

  updateHomeAnimation = () => {
    this.setState({ homeAnimation: true });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  homeAnimation={this.state.homeAnimation}
                  updateHomeAnimation={this.updateHomeAnimation}
                />
              )}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/pose" component={Pose} />
            <Route exact path="/test" component={Test} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
