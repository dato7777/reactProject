import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectLogged, selectStaff,selectUserName } from './LoginSlice';

const About = () => {
  const userName = useSelector(selectUserName)
  const logged1 = useSelector(selectLogged)

  return (
    <div>
      Welcome, {logged1 ? userName:"guest"}
      
      
      
      </div>
  )
}

export default About