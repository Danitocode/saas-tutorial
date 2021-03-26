import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import Logout from '../logout/Logout';

function Profile(){
    const{user, isAuthenticated} = useAuth0();

    return(
        isAuthenticated && (
            <div className="flex m-4 p-4">
                <img className="rounded-full w-20 h-20 mr-4" src={user.profile} alt={user.name}></img>
                <h2>{user.name}</h2>
                <p>{JSON.stringify(user)}</p>
                <Logout/>
            </div>
        )
    )
}

export default Profile;