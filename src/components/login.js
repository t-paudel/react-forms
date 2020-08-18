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
    if(this.state.errorMessage) {
      this.setState({errorMessage : ''});
    }
  }
  
  mySubmitHandler = (event) => {
    event.preventDefault();
    let error = '';
    if(this.state.username !== "admin" || this.state.password !== "admin") {
      error = "Invalid credentials";
      this.setState({errorMessage : error});
    }
    else {
        this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="login-div">
        <form onSubmit={this.mySubmitHandler}>
            <h1>Login/Sign Up</h1>
            <div className="key-box">Username :</div>
            <div className="value-box">
                <input type="text" name='username' onChange={this.myChangeHandler}/>
            </div>
            <div className="key-box">Password :</div>
            <div className="value-box">
                <input type="password" name='password' onChange={this.myChangeHandler}/>
            </div>
            <div className="button-box">
                <button type="submit">Login</button>
            </div>
            <div className="error-message">{this.state.errorMessage}</div>
        </form>
      </div>
    );
  }
}
export default Login;