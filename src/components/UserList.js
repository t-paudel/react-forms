import React from 'react';
import Users from './users';
import ReactTooltip from "react-tooltip";

class UserList extends React.Component {

    constructor(props_users) {
        super(props_users);

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

        this.state = { 
                        dataPointer: 1,
                        userList: [],
                        previous:true,
                        next:false,
                        mouseOver: false,
                        currentUserMail : '',
                        currentUser : '',
                        lastUser :'',
                        showDiv : false,
                        copySuccess:'',
                        open: false,
                        vertical: 'top',
                        horizontal: 'center',
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
        console.log('UserList::getUser()');

        this.props.history.push("/list-of-users/" + id);
    }

    showData(id) {
        console.log('UserList::showData() ',id);

        if(this.state.lastUser !== id) {
            this.setState({lastUser:id});
        }
        else {
            this.setState({lastUser:''});
        }
        // this.setState({currentUser:id});
        // if(this.state.lastUser === '')
        //     this.setState({lastUser:id});
        
        // if(this.state.lastUser === this.state.currentUser)
        //     this.setState({showDiv:!this.state.showDiv});
        // else {
        //     this.setState({lastUser:id});
        //     this.setState({showDiv:true});
        // }
        // console.log('lastUser = ' + this.state.lastUser + '; currentUser = ' + this.state.currentUser + 
        // '; showDiv = ' + this.state.showDiv);
    }

    copyToClipboard(event){
        console.log(event);
        console.log(document.getElementById("123"));
        // alert(event.currentTarget.value);
      };

    render() {
        console.log('UserList::render()');

        return (
            <div>
                <div>
                    <center><h1>User List</h1></center>
                    {this.state.userList.map((user) => (
                        <div className="card" onClick={()=>this.showData(user.email)} 
                            onMouseEnter={()=>this.setState({mouseOver:true, currentUserMail:user.email})}
                            onMouseLeave={()=>this.setState({mouseOver:false, currentUserMail:user.email})}>
                            <div className="card-body">
                                <div className="card-text"><h1>{user.first_name} {user.last_name}</h1></div>
                                <div className="card-text" data-tip data-for="registerTip"><img className="round-image" src={user.avatar}></img></div>
                                {this.state.mouseOver && (
                                    <ReactTooltip id="registerTip" place="top" effect="solid">
                                        {this.state.currentUserMail}
                                    </ReactTooltip>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* {this.state.showDiv && (
                    <div id="123"className="show-div" onClick={(event)=>this.copyToClipboard(event)}>
                        {this.state.currentUser}
                    </div>
                    
                )} */}

                {this.state.lastUser !== '' && (
                    <div id="123"className="show-div" onClick={(event)=>this.copyToClipboard(event)}>
                        {this.state.lastUser}
                    </div>
                    
                )}
                <div>
                    <button onClick={this.previous} disabled={this.state.previous} >Previous</button>
                    <button onClick={this.next} disabled={this.state.next}>Next</button>
                </div>
            </div>             
    );
    }
}

export default UserList;