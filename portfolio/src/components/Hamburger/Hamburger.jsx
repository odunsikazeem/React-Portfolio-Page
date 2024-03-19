import React, { useState } from "react";
import RightNav from "../RightNav/RightNav";
import "./style.css";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu=()=>{
    setIsOpen(!isOpen);
    console.log (isOpen)
  };
  
    
  return (
    <>
    <div className="burger"  onClick={toggleMenu}>
      <div className="trigger"/>
      <div className="trigger"/>
      <div className="trigger"/>
    </div>
     {isOpen ? "" : < RightNav />}
    </>
  );
}
export default Hamburger;

