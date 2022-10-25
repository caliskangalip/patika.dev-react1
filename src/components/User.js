import React from 'react'
import PropTypes from 'prop-types';

export function FriendList(){
    const friendList=[
        {id: 1, friendName:"Erkan"},
        {id: 2, friendName:"Mehmet"},
        {id: 3, friendName:"Hüseyin"}]
    return friendList
}

function User({name, surName, age, friends, isLoggedIn}) {
  return (
    <>
    <h2>{isLoggedIn ? `${name} ${surName} (${age})`:"Giriş yapılmamış"}</h2>
    {friends.map((friend)=>{
        <div key={friend.id}>{friend.friendName}</div>
    })}
    </>
  )
}
User.PropTypes = {
    name: PropTypes.string.isRequired,
    surName: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired

}
User.defaultProps ={
    isLoggedIn:false
}

export default User

