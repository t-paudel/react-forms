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

    clickedOnImage(id) {
        console.log('User::clickedOnImage ', id);
    }

    render() {
        console.log('Users::render()');
        
        if(this.state.user) {
            return (
                <div>
                    <div className="user-box">
                        <div className="card-body">
                            <div className="card-text">
                                <h1>{this.state.user.data.first_name} {this.state.user.data.last_name}</h1>
                            </div>
                            <div className="card-text">
                                <img className="round-image" src={this.state.user.data.avatar} 
                                    onClick={()=>this.clickedOnImage(this.state.user.data.first_name)}></img>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="card-text">
                                <h3>Company : {this.state.user.ad.company}</h3>
                                <h3>URL : {this.state.user.ad.url}</h3>
                                <h3>{this.state.user.ad.text}</h3>
                            </div>
                        </div>
                    </div>
                </div>             
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }
}

export default Users