import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import style from './adminNav.module.css'
import Link from "next/link";


const AdminNav = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    console.log(props, 'iiiiiii')
    const { pending, varified, setPending, setVarified } = props

    console.log(pending, varified, 'iii')
    const open = (fun) => {

        return () => {
            if (fun == 'pending') {
                setPending('isActive')
                setVarified('notActive')
            } else {
                setVarified('isActive')
                setPending('notActive')
            }
        }
    }
    return (
        <>
            <div className={style["nav-div"]}>
                <div className={style["logo"]}>
                    <img src="" alt="logo" />
                    <h2>@Admin</h2>
                </div>

                <div className={showMenu ? style["mobile-menu"] : style["menu-link"]}>
                    <ul>
                        {/* <li><div onClick={open('home')} className={style[home]}> Home</div> </li> */}

                        <li><div onClick={open('pending')} className={style[pending]}>  Pending Applicants</div></li>

                        <li> <div onClick={open('varified')} className={style[varified]}>Varified Applicants</div></li>
                    </ul>


                </div>

                <div className={style["profile"]}>
                    <button className={style["logout-btn"]}>Logout<div className={style["arrow-wrapper"]}><div className={style["arrow"]}></div></div></button>
                    <div className={style["hamburger-menu"]}>
                        <a href="#!" onClick={() => setShowMenu(!showMenu)}> <GiHamburgerMenu /> </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export { AdminNav }