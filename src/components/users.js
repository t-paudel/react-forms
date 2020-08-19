import React from 'react';

    
const Users = ({user}) => {
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h5><p class="card-text">{user.first_name} {user.last_name}</p></h5>
                    <h6 class="card-subtitle mb-2 text-muted">{user.email}</h6>
                    <p class="card-text">{user.ad}</p>
                </div>
            </div>
        </div>
    )
};
    
export default Users