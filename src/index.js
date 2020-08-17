import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {Redirect} from 'react-router-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', errormessage:''};
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  
  mySubmitHandler = (event) => {
    
    
    event.preventDefault();
    let err = '';
    if(this.state.username !== "admin" || this.state.password !== "admin") {
      err=<strong>Invalid credentials</strong>
    }
    // else {
    //     return  <Redirect  to="/posts/" />
    // }
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Login/Sign Up</h1>
        <p>Username :</p>
        <input type="text" name='username' onChange={this.myChangeHandler}/>
        <p>Password :</p>
        <input type="text" name='password' onChange={this.myChangeHandler}/>
        <button type="submit">Login</button>
        {this.state.errormessage}
      </form>
    );
  }
}
export default Login;

class DashBoard extends React.Component {
  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

//export default Dashboard;
//ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render((
//   <Router history = {browserHistory}>
//      <Route path = "/" component = {Login}>
//         <IndexRoute component = {Login} />
//         <Route path = "dashboard" component = {DashBoard} />
//      </Route>
//   </Router>
// ), document.getElementById('app'))
