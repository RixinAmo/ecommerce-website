<<<<<<< HEAD
import React , { useEffect, useState, useContext } from 'react'
=======
import React , { useEffect, useState } from 'react'
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a
import "./Hero.css"
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow_icon.png"
import men from "../../assets/p8.webp"
<<<<<<< HEAD
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

=======

const Hero = () => {

  //--------------------
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Get username from localStorage
    const savedName = localStorage.getItem("username");
    if (savedName) {
      setUsername(savedName);
    }
  }, []);

  //-------------------
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a

  return (
    <div className='hero'>
        <div className="hero-left">

<<<<<<< HEAD
         <h2>
          {user && showWelcome 
            ? `Welcome, ${user.name}! 🎉`
            : "Best Deals ! Best Prices !"}
        </h2>
=======
          {/* -------------------------*/}
         <h2>
          {username ? `Welcome, ${username}! 🎉` : "Best Deals ! Best Prices !"}
        </h2>
          {/* ----------------------- */}

          {/* <h2>Best Deals !  Best Prices !</h2> */}
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a
       
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