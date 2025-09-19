<<<<<<< HEAD
import React , { useState, useContext} from 'react'
import "../CSS/LoginSignup.css"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
const LoginSignup = () => {
  

  const [name, setName] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault(); 
=======
import React , { useState } from 'react'

import "../CSS/LoginSignup.css"
//----------------
import { useNavigate } from "react-router-dom";
//-------------
const LoginSignup = () => {
  
  //--------------------------------
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    // ✅ Here you can add validation or API call later

>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a
    
    if (name.trim() === "" ) {
      alert("Please fill all fields");
      return;
    }

<<<<<<< HEAD
    const loggedUser = { name }; 

    localStorage.setItem("user", JSON.stringify(loggedUser));
    setUser(loggedUser);

    navigate("/"); 
=======
     // Save name in localStorage
    localStorage.setItem("username", name);

    navigate("/"); // 👈 redirect to Hero (home page)
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a
  };

  //-------------------------
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign In</h1>
<<<<<<< HEAD
=======
        {/* <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name'  value={name}
            onChange={(e) => setName(e.target.value)}/>
          <input type='email' placeholder='Email Address'  value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <input type='password' placeholder='Password' value={password}
            onChange={(e) => setPassword(e.target.value)}/>

          <button>Continue</button>
        </div> */}
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a

        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

<<<<<<< HEAD
        
=======
          {/* ✅ make button type="submit" */}
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a
          <button type="submit">Continue</button>
        </form>

      </div>
    </div>
  )
}

export default LoginSignup