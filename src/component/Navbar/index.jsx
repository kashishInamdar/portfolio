import "./Navbar.css";

import { SiWebmoney } from "react-icons/si";
import { menu } from "./../../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";


const Navbar = () => {

  const [showSidebar , setShowSidebar] = useState(false)
  return (
    <nav>
      <div className="navbar__container">

       {
        showSidebar ? (
          <div className="overly" onClick={()=>{setShowSidebar(!showSidebar)}} ></div>
        ): ""

       }

        <div className="log__container">  
          <SiWebmoney  />
        </div>

        <div className={`tab__group ${showSidebar ? "show" : ""}`}>
          <span className="icon__container close__btn" onClick={()=>{setShowSidebar(!showSidebar)}} >
            <FaTimes />
          </span>
          {menu.map((list, index) => (
            <Link
              activeClass="active"
              className="tab__item name"
              to={list.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}>
              {list.name}
            </Link>
          ))}
        </div>
        <div className="nav__button__groups">
          <button className="btn btn_primary">
            Hear Me <FaArrowUpRightFromSquare />{" "}
          </button>
          <FaBarsStaggered className="menu"  onClick={()=>{setShowSidebar(!showSidebar)}}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
