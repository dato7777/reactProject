import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectLogged, selectStaff,selectUserName } from './LoginSlice';
import {
  WelcomeContainer, 
  WelcomeContent,
  WelcomeImg, 
  WelcomeContentText,
  WelcomeContentTitle,
  WelcomeText,
  Img
} from '../Styles/Welcome.js';

const Homepage = () => {
  const userName = useSelector(selectUserName)
  const logged1 = useSelector(selectLogged)
  return (
    <div> 
       {/* <img src="/images/variousHome.jpeg" alt="horse" /> */}

       <WelcomeContainer>
                <WelcomeContent>
                    <WelcomeImg>
                    <img src="/images/variousHome.jpeg" alt="horse" width="600" height="450"/> 
                    </WelcomeImg>
                    <WelcomeContentText>
                        <WelcomeContentTitle>Welcome, {logged1 ? userName:"guest"}</WelcomeContentTitle>
                        <WelcomeText>
                            "Jacobs' Dreams" is a great way to order from home when you are thirsty!  
                            Enjoy a variety of categories to choose from that help meet your needs in your journey to happinness.
                            You can order our highest grade alcohol and non alcohol drinks that you want with our user-friendly interface.  
                            Please drink responsibly. :)
                        </WelcomeText>
                        <WelcomeText>
                            The order will be sent straight to your door step in less then 
                            1hr pre-packed for you in portions. 
                            Start cooking by folloing the visual guide in your order and serve your family a health meal.
                        </WelcomeText>
                    </WelcomeContentText>
                </WelcomeContent>
                

            </WelcomeContainer>
    </div>
  )
}

export default Homepage