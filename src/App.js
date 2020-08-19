import './App.css';
import UserList from './components/UserList.js';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom"; 
import Login from './components/login.js';
import React, {Component} from 'react';
import Users from './components/users';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route exact path="/list-of-users" component={UserList} />
              <Route path="/list-of-users/user" component={Users} />
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
