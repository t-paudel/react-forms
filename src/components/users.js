import React from 'react'

const Users = ({users}) => {
    return (
        <div>
            <center><h1>User List</h1></center>
            {users.map((user) => (
                <div class="card">
                    <div class="card-body">
                        <h5><p class="card-text">{user.first_name} {user.last_name}</p></h5>
                        <h6 class="card-subtitle mb-2 text-muted">{user.email}</h6>
                        <p class="card-text">{user.avatar}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Users