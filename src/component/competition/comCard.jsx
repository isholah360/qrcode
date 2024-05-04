import "./compcad.css";
import { useState, useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import gsap from "gsap";

function ComCard() {
  const myElementRef = useRef(null);
  const myElement = useRef(null);

  const handleOn = () => {
    gsap.fromTo(
      myElementRef.current, // Target element
      { opacity: 0, height: 0, display:"block", }, // Initial state
      { opacity: 1, height: "79%", duration: 1, ease: Power3.easeOut } // Final state
    );
  };
  const handleOut = () => {
    gsap.fromTo(
        myElementRef.current, // Target element
        { opacity: 1, height: "79%" }, // Initial state
        { opacity: 0, height: 0, duration: 1, display:"none", ease: Power3.easeOut } // Final state
      );
  };
  return (
    <div>
      <div className="comp-card-comp" onMouseEnter={handleOn} onMouseLeave={handleOut}>
        <div className="candit-one">
          <div className="card-img">
            <img src="assets/bt-golf.jpg" alt="" />
          </div>
          <div className="name-social" >
            <div className="ply-nme">Ishol Duro</div>
            <div className="ply-social"ref={myElementRef}>
              <img src="assets/fb.png" alt="" />
              <img src="assets/twi.png" alt="" />
              <img src="assets/ins.png" alt="" />
            </div>
          </div>
        </div>
        <div className="versus">vs</div>
        <div className="candit-two"></div>
      </div>
    </div>
  );
}

export default ComCard;
