import './App.css';
import Contacts from './contact.js';
import Users from './components/users.js';

  
import React, {Component} from 'react';

class App extends Component {
  render() {
      return (
          <Users users={this.state.users} />
        //  <Contacts contacts={this.state.contacts} />
      );
  }

  state = {
      users: []
  };

  // state = {
  //   contacts: []
  // };

  componentDidMount() {
      fetch('https://reqres.in/api/users?page=2')
          .then(res => res.json())
          .then((data) => {
              this.setState({ users: data.data })
          }).then(
            console.log(this.state.users)
          )
          .catch(console.log)
  }

  // componentDidMount() {
  //   fetch('http://jsonplaceholder.typicode.com/users')
  //       .then(res => res.json())
  //       .then((data) => {
  //           this.setState({ contacts: data })
  //       })
  //       .catch(console.log)
  // }
}

export default App;
