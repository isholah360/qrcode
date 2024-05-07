import "./navigate.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";


function Navi() {
  const menuMove = useRef(null);

  
  const handleMenu = () => {
    gsap.fromTo(
      menuMove.current,
      { opacity: 0, x: "15rem" }, // Initial state
      { opacity: 1, x: "-18rem", duration: 2 } // Final state
    );
  };
  const handleClose = () => {
    gsap.fromTo(
      menuMove.current,
      { x: "-15rem", duration: 5 }, // Initial state
      { x: "15rem", duration: 5 } // Final state
    );
  };


  
  return (
    <div>
      <div className="naviagtion">
        <div className="logo-link">LOGO</div>
        <div className="navigate-list">
          <ul ref={menuMove}>
            <div className="close" onClick={handleClose}>
              X
            </div>
            <div className="account">
             
                {/* <Link to="/login">
                  <button>Login</button>
                </Link> */}
      
            </div>
            <li>Home</li>
            <li>About Us</li>

            <li>Event</li>
            <li>Tournamet</li>
            <li>Contact</li>
            
           
          </ul>
        </div>
        <div className="farbar" onClick={handleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
      </div>
    </div>
  );
}

export default Navi;
