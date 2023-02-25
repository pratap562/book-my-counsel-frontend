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
                    <li><NavLink to="/" style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#545e6f',
                                 background: isActive ? '#7600dc' : '#f0f0f0',
                                 padding: '4px 8px',
                                 borderRadius: "4px"
                             })}>
                    <span >Home</span></NavLink></li>
                    <li><NavLink to="/Pendingapplicants" style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#545e6f',
                                 background: isActive ? '#7600dc' : '#f0f0f0',
                                 padding: '4px 8px',
                                 borderRadius: "4px"
                             })}>Pending Applicants</NavLink></li>
                    <li><NavLink to="/Varifiedapplicants" style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#545e6f',
                                 background: isActive ? '#7600dc' : '#f0f0f0',
                                 padding: '4px 8px',
                                 borderRadius: "4px"
                             })}>Varified Applicants</NavLink></li>
                    
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