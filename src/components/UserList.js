import React from 'react'

const UserList = ({users}) => {
    return (
        <div>
            <center><h1>User List</h1></center>
            {users.map((user) => (
                <div className="card">
                    <div className="card-body">
                        <div className="card-text">{user.first_name} {user.last_name}</div>
                        <div className="card-subtitle mb-2 text-muted">{user.email}</div>
                        <div className="card-text"><img className="round-image" src={user.avatar}></img></div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default UserList;