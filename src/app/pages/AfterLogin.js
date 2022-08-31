import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { selectToken, selectLogged, selectStaff,selectUserName } from './LoginSlice';
const AfterLogin = () => {
  const userName = useSelector(selectUserName)
  const logged1 = useSelector(selectLogged)
  
  return (
    <div><h1>Welcome, {logged1 ? userName:"guest"}</h1></div>
  )
  
}
export default AfterLogin