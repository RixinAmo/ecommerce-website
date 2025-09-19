import React , { useEffect, useState, useContext } from 'react'
import "./Hero.css"
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow_icon.png"
import men from "../../assets/p8.webp"
import { UserContext } from "../../App";

const Hero = () => {

   const { user } = useContext(UserContext);
    const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (user) {
      setShowWelcome(true);
      const timer = setTimeout(() => setShowWelcome(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [user]);


  return (
    <div className='hero'>
        <div className="hero-left">

         <h2>
          {user && showWelcome 
            ? `Welcome, ${user.name}! 🎉`
            : "Best Deals ! Best Prices !"}
        </h2>
       
        <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" height="60px" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" height="30px"/>
        </div>
        </div>
        
        <div className="hero-right">
  <img src={men} alt="" height="400px" />
        </div>
    </div>
  )
}

export default Hero