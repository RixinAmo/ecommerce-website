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
    
    if (name.trim() === "" ) {
      alert("Please fill all fields");
      return;
    }

    const loggedUser = { name }; 

    localStorage.setItem("user", JSON.stringify(loggedUser));
    setUser(loggedUser);

    navigate("/"); 
  };

  //-------------------------
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign In</h1>

        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

        
          <button type="submit">Continue</button>
        </form>

      </div>
    </div>
  )
}

export default LoginSignup