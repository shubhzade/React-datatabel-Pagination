import React from 'react'

const Usr = ({user}) => {
    // console.log(user)
    return (
        <div>
           <hr/>
           <h3>{` No.${user.id} : Title 👉 👉 ${user.title}`}</h3>
           <p>{` No.${user.body}`}</p>
        </div>
    )
}

export default Usr;
