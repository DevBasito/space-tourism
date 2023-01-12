import React from "react";
import './Nav.css';
import Images from '../../Constants/Images.js';
import { Link } from "react-router-dom";



const Nav = () => {


  const hamburger = () => {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
      x.className += " responsive";
      document.getElementById('ham').src = Images.Close;
    } else {
      x.className = "topnav";
      document.getElementById('ham').src = Images.Hamburger;
    }
  }


  return (
    <>
      <div className=" container-fluid d-flex flex-row justify-content-between py-5" >

        <div className="logo  p-2 "> <img src={Images.Logo} alt="Logo" /> </div>

        <div className="hrzln text-light w-25  p-2 "> <hr /> </div>

        <div className="topnav  p-2 ps-5" id="menu" >

          <Link to="/" > <span className="navnum" >00 </span> HOME</Link>
          <Link to="/destination"><span className="navnum" >01 </span> DESTINATION</Link>
          <Link to="/crew"><span className="navnum">02 </span> CREW</Link>
          <Link to="/technology"><span className="navnum">03 </span> TECHNOLOGY</Link>

          <a href="/#" className="icon" onClick={hamburger}>
            <img src={Images.Hamburger} alt=""  id="ham"/>
          </a>

        </div>

      </div>

    </>
  )
}

export default Nav;