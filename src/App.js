import './App.css';
import Users from './components/users.js';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom"; 
import Login from './components/login.js';
import React, {Component} from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/dashboard" component={Users} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
  
  state = {
      users: []
  };
}

export default App;
