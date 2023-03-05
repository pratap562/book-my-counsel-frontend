import React, { useEffect, useState } from "react";
// import { NavLink, Router } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import style from './adminNav.module.css'
import Link from "next/link";
import Router from "next/router";


const AdminNav = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    console.log(props, 'iiiiiii')
    const { pending, varified, setPending, setVarified, setPageNo } = props
    const [adminName, setadminName] = useState('Admin')

    const open = (fun) => {

        return () => {
            if (fun == 'pending') {
                setPending('isActive')
                setVarified('notActive')
            } else {
                setVarified('isActive')
                setPending('notActive')
            }
            setPageNo(1)
        }
    }
    async function doLogOut() {
        let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/logout`, {
            method: 'GET',
            credentials: 'include',
        })
        let newRes = await res.json()
        console.log(newRes);
        // console.log(newRes.redirect_uri);
        Router.push('/signinsignup?#')
    }
    useEffect(() => {
        if (document.cookie) {
            console.log(document.cookie)
            let role = document.cookie.split('=')[1].split('%20')[0]
            // name = document.cookie.split('=')[1].split('%20')[1]
            let tmpName = role.split('-')[1]
            tmpName = tmpName.split(';')[0]
            role = role.split('-')[0]
            console.log(role, tmpName, 'll')
            setadminName(tmpName)
        }
    }, [])
    return (
        <>
            <div className={style["nav-div"]}>
                <div className={style["logo"]}>
                    <div className={style.name}>{adminName}</div>
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
                    <button onClick={doLogOut} className={style["logout-btn"]}>Logout<div className={style["arrow-wrapper"]}><div className={style["arrow"]}></div></div></button>
                    <div className={style["hamburger-menu"]}>
                        <a href="#!" onClick={() => setShowMenu(!showMenu)}> <GiHamburgerMenu /> </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export { AdminNav }