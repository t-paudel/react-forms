import React from 'react';
import UserList from './UserList';

class Users extends React.Component {
    
    state = {
        userList: []
    };

    componentDidMount() {
        fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then((data) => {
                this.setState({ userList: data.data })
            }).then(
              console.log(this.state.userList)
            )
            .catch(console.log)
    }

    render() {
      return (
          <UserList users={this.state.userList} />
      );
    }
}

export default Users;