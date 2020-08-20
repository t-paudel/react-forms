import React from 'react';
import Users from './users';

class UserList extends React.Component {

    constructor(props_users) {
        super(props_users);

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

        this.state = { 
                        dataPointer: 1,
                        userList: [],
                        previous:true,
                        next:false
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
        if(x > 1) {
            this.state.previous = false;
            this.state.next = false;
        }
        if(x===2) {
             this.state.next = true;
        }
    }

    next() {
        console.log('UserList::next()');

        let x = this.state.dataPointer + 1;
        this.state.dataPointer = x;
        this.getUserList(this.state.dataPointer);
        if(x===2) {
            this.state.next = true;
        }
        if(x>1) {
            this.state.previous = false;
        }
    }

    getUser(id) {
        console.log('UserList::getUser() = ' + id);

        this.props.history.push("/list-of-users/" + id);
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
                    <button onClick={this.previous} disabled={this.state.previous} >Previous</button>
                    <button onClick={this.next} disabled={this.state.next}>Next</button>
                </div>
            </div>             
    );
    }
}

export default UserList;