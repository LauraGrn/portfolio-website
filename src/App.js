import React, { Component } from 'react';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'components/home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Switch>
            <Route exact path="/" render={() => <div>home</div>} />
            <Route exact path="/about" render={() => <div>about</div>} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
