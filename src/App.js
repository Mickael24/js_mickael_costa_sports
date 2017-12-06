import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Soccer from './containers/Soccer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/*" component={Soccer}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
