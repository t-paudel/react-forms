import React from 'react';
import Users from './users';

class UserList extends React.Component {

    constructor(props_users) {
        super(props_users);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

        this.state = { 
                        dataPointer: 1,
                        userList: []
                    };
      }

    componentDidMount() {
        console.log('UserList::componentDidMount()');

        this.getUserList(this.state.dataPointer);
    }

    getUserList(pointer) {
        console.log('UserList::getUserList()');

        fetch('https://reqres.in/api/users?page='+pointer)
            .then(res => res.json())
            .then((data) => {
                this.setState({ userList: data.data })
            })
            .catch(console.log)
    }

    previous() {
        console.log('UserList::previous()');

        let x = this.state.dataPointer - 1;
        this.state.dataPointer = x;
        this.getUserList(this.state.dataPointer);
    }


    next() {
        console.log('UserList::next()');

        console.log("before update = " + this.state.dataPointer);
        let x = this.state.dataPointer + 1;
        console.log(x);
        this.state.dataPointer = x;
        console.log("after update = " + this.state.dataPointer);
        this.getUserList(this.state.dataPointer);
    }

    getUser(id) {
        console.log('UserList::getUser() = ' + id);

        fetch('https://reqres.in/api/users/'+id)
            .then(res => res.json())
            .then((data) => {
                this.test(data);
            })
            .catch(console.log)
        
    }

    test(data) {
        console.log('test');
        return (
            <Users user={data} />
        );
    }

    render() {
        console.log('UserList::render()');

        return (
            //  <UserList users={this.state.userList} />
            <div>
                <div>
                    <center><h1>User List</h1></center>
                    {this.state.userList.map((user) => (
                        <div className="card" onClick={()=>this.getUser(user.id)}>
                            <div className="card-body">
                                <div className="card-text"><h1>{user.first_name} {user.last_name}</h1></div>
                                <div className="card-text"><img className="round-image" src={user.avatar}></img></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <button onClick={this.previous} >Previous</button>
                    <button onClick={this.next}>Next</button>
                </div>
            </div>             
    );
    }
}

export default UserList;