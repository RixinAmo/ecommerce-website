import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
<<<<<<< HEAD
import { UserContext } from "../../App";
import { ShopContext } from "../../Context/ShopContext";
import { Menu, X } from "lucide-react";
=======
import { ShopContext } from "../../Context/ShopContext";
import { Menu, X } from "lucide-react"; // install lucide-react or use font-awesome
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
<<<<<<< HEAD
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

=======
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" height="50px" />
        <p>Shopify</p>
      </div>

<<<<<<< HEAD
     
=======
      {/* Hamburger */}
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a
      <div className="nav-hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

    
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li
          onClick={() => {
            setMenu("home"); setIsOpen(false);
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");setIsOpen(false);
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens"); setIsOpen(false);
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#626262" }}
            to="/womens"
          >
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids"); setIsOpen(false);
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

<<<<<<< HEAD

      <div className="nav-login-cart">
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
=======
      {/* Login + Cart */}
      <div className="nav-login-cart">
        <Link to="/login">
          {" "}
          <button>Login</button>
        </Link>
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a
        <Link to="/cart">
          <img src={cart_icon} alt="cart" height="40px" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
<<<<<<< HEAD

=======
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a
    </div>
  );
};

export default Navbar;
