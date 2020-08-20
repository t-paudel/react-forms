import React from 'react';


class Users extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            user:''
        }
    }
    
    componentDidMount() {
        console.log ("Users::componentDidMount()");

        const id = this.props.match.params.id;
        this.getUser(id);
    }

    getUser(id){
        console.log ("Users::getUser()");

        fetch('https://reqres.in/api/users/'+id)
            .then(res => res.json())
            .then((x) => {
                this.setState({user : x})
            })
            .catch(console.log)
    }
    render() {
        console.log('UserList::render()' , this.state, this.state.user);

        return (
            <div>
                <div>
                    complete JSON = {JSON.stringify(this.state.user)}<br/><br/>
                    data = {JSON.stringify(this.state.user.data)} <br/><br/>
                    ad = {JSON.stringify(this.state.user.ad)}
                    {/* {this.state.user.data.email} */}
                    {/* <div>
                        <div className="card-body">
                            <div className="card-text"><h1>{this.state.user.data.first_name} {this.state.user.data.last_name}</h1></div>
                            <div className="card-text"><img className="round-image" src={this.state.user.data.avatar}></img></div>
                        </div>
                    </div> */}
                </div>
            </div>             
        );
    }
}

export default Users