import React from 'react';
import { useSelector } from 'react-redux';
import{ themeSlice } from './features/theme';

function Profile() {
  const user = useSelector (state => state.user.value )
  if(!user.name){
    return
  }
  return (
    <div style={{'color': themeSlice}}>
       <h1>Profile</h1>
       <h2>Name:{user.name} </h2>
       <h2>Age: {user.age}</h2>
       <h2>Email: {user.email} </h2>
    </div>
   
  )
}

export default Profile