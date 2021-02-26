import React from 'react';
import {USER_PER_PAGE} from "./Constants";
import Usr from "./Usr";

const User = ({user,page}) => {
    const startIndex=(page -1)* USER_PER_PAGE

    const selectUser=user.slice(startIndex, startIndex +USER_PER_PAGE);
   
    
    return selectUser.map(user=>(
        <Usr user={user} />
    ))
}

export default User
