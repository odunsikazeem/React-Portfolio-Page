import React, { useEffect, useState } from "react";
import RightNav from "../RightNav/RightNav";
import "./style.css";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu=()=>{
    setIsOpen(!isOpen);
    console.log (isOpen)
  };


  useEffect (
    ()=>{
      const hideBurger=()=>{
        if (window.innerWidth > 768) {
          setIsOpen(true);
      } else {
           setIsOpen(false);
      }
      }
      window.addEventListener("resize", hideBurger)
      return () => {
        window.removeEventListener("resize", hideBurger);
     };
    }, []
 )


  return (
    <>
    <div className="burger"  onClick={toggleMenu}>
      <div className="hamburger"/>
      <div className="hamburger"/>
      <div className="hamburger"/>
    </div>
     {isOpen && < RightNav />}
    </>
  );
}
export default Hamburger;

