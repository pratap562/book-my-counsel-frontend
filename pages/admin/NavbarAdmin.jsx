import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
const AdminNav = ()=>{
    const [showMenu, setShowMenu] = useState(false)
    return(
        <div className="nav-div">
            <div className="logo">
                <img src="" alt="logo" />
                <h2>@Admin</h2>
            </div>

            <div className={showMenu ? "mobile-menu":"menu-link"}>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Allapplicants">All Applicants</NavLink></li>
                    <li><NavLink to="/Pendingapplicants">Pending Applicants</NavLink></li>
                    <li><NavLink to="/Varifiedapplicants">Varified Applicants</NavLink></li>
                    
                </ul>

                
            </div>

            <div className="profile">
            <button className="logout-btn">Logout<div class="arrow-wrapper"><div class="arrow"></div></div></button>
            <div className="hamburger-menu">
                    <a href="#!" onClick={()=> setShowMenu(!showMenu)}> <GiHamburgerMenu/> </a>
                </div>
            </div>
        </div>
    )
}

export {AdminNav}