import React from 'react'

function FriendList(){
    const friendList=[
        {id: 1, friendName:"Erkan"},
        {id: 2, friendName:"Mehmet"},
        {id: 3, friendName:"Hüseyin"}]
    return friendList
}

function User() {
    const getFriends=FriendList()
  return (
    <>
    {getFriends.map(friend => <div key={friend.id}>{friend.friendName}</div>)}
    </>
  )
}

export default User

