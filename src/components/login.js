import React from 'react';
import '../index.css';

class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', errorMessage: ''};
  }

  myChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]: value});
  }
  
  mySubmitHandler = (event) => {
    event.preventDefault();
    let error = '';
    if(this.state.username !== "admin" || this.state.password !== "admin") {
      error = "Invalid credentials";
    }
    this.setState({errorMessage : error});
  }

  render() {
    return (
      <div class="login-div">
        <form onSubmit={this.mySubmitHandler}>
            <h1>Login/Sign Up</h1>
            <div class="key-box">Username :</div>
            <div class="value-box">
                <input type="text" name='username' onChange={this.myChangeHandler}/>
            </div>
            <div class="key-box">Password :</div>
            <div class="value-box">
                <input type="password" name='password' onChange={this.myChangeHandler}/>
            </div>
            <div class="button-box">
                <button type="submit">Login</button>
            </div>
            <div class="error-message">{this.state.errorMessage}</div>
        </form>
      </div>
    );
  }
}
export default Login;