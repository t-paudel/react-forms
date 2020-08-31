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
                        currentUserMail : ''
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

    mouseEnter(id){
        console.log('UserList::mouseEnter()');
        this.state.mouseOver = true;
        console.log(this.state.mouseOver);
    }
    mouseLeave(id){
        console.log('UserList::mouseLeave()');
        this.state.mouseOver = false;
        console.log(this.state.mouseOver);
    }

    // render() {
    //     console.log('UserList::render');

    //     return (
    //         <div>
    //             <button onMouseEnter={() => this.setState({mouseOver:true})} onMouseLeave={() => this.setState({mouseOver:false})}>
    //                 Hover over me!
    //             </button>
    //             {this.state.mouseOver && (
    //             <div>
    //                 I'll appear when you hover over the button.
    //                 </div>
    //             )}
    //         </div>
    //     );
    // }
    render() {
        console.log('UserList::render()');

        return (
            <div>
                <div>
                    <center><h1>User List</h1></center>
                    {/* <button data-tip data-for="registerTip">
                        Register
                    </button>
                    <ReactTooltip id="registerTip" place="top" effect="solid">
                        Tooltip for the register button
                    </ReactTooltip> */}


                    {this.state.userList.map((user) => (
                        <div className="card" onClick={()=>this.getUser(user.id)} 
                            onMouseEnter={()=>this.setState({mouseOver:true, currentUserMail:user.email})}
                            onMouseLeave={()=>this.setState({mouseOver:false, currentUserMail:user.email})}>
                            <div className="card-body">
                                <div className="card-text"><h1>{user.first_name} {user.last_name}</h1></div>
                                <div className="card-text" data-tip data-for="registerTip"><img className="round-image" src={user.avatar}></img></div>
                                {/* <div className="card-text"> {this.state.mouseOver ? (<div> Hello</div>) : (<div>123</div>)}  </div> */}
                                {this.state.mouseOver && (
                                    // <div>{user.email}</div>
                                    <ReactTooltip id="registerTip" place="top" effect="solid">
                                        {this.state.currentUserMail}
                                    </ReactTooltip>
                                )}
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