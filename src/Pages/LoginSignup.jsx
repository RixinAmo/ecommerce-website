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

    
    if (name.trim() === "" ) {
      alert("Please fill all fields");
      return;
    }

     // Save name in localStorage
    localStorage.setItem("username", name);

    navigate("/"); // 👈 redirect to Hero (home page)
  };

  //-------------------------
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign In</h1>
        {/* <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name'  value={name}
            onChange={(e) => setName(e.target.value)}/>
          <input type='email' placeholder='Email Address'  value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <input type='password' placeholder='Password' value={password}
            onChange={(e) => setPassword(e.target.value)}/>

          <button>Continue</button>
        </div> */}

        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          {/* ✅ make button type="submit" */}
          <button type="submit">Continue</button>
        </form>

      </div>
    </div>
  )
}

export default LoginSignup