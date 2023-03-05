import Link from "next/link"
import Image from "next/image"
import logo from "../images/logo.jpg"
import styles from "./navbar.module.css"
import { useEffect, useState } from "react"
import Router from "next/router"
// import Style from "./navbar.css"


export const Navbar = () => {
    // let role
    const [loading, stopLoading] = useState(true)
    let [name, setName] = useState('login/signup')
    let [role, setRole] = useState('')
    let [links, setLinks] = useState([{ text: 'Book Apointment', link: '/advocate/list' }])


    useEffect(() => {
        if (document.cookie) {
            console.log(document.cookie)
            role = document.cookie.split('=')[1].split('%20')[0]
            // name = document.cookie.split('=')[1].split('%20')[1]
            name = role.split('-')[1]
            name = name.split(';')[0]
            role = role.split('-')[0]
            console.log(role, name, 'll')
        }
        console.log(role, name)
        if (role == 'advocate') {
            setLinks([{ text: 'All Advocate', link: '/advocate/list' }, { text: 'Dashboard', link: '/advocate/dashboard' }])
        }
        console.log(name, 'nammmmmmmmmmmmmmmmmmmmmm')
        setName(name)
        setRole(role)
        stopLoading(false)
    }, [])
    async function doLogOut() {
        let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/logout`, {
            method: 'GET',
            credentials: 'include',
        })
        let newRes = await res.json()
        // console.log(newRes.redirect_uri);
        setLinks(([{ text: 'Book Apointment', link: '/advocate/list' }]))
        setName('login/signup')
    }
    const openHomePage = () => {
        Router.push('/')
    }
    return (
        <>
            {loading ? <div>loading...</div> :
                <div className={styles.header}>
                    <div className={styles.navbar}>
                        <div className={styles.logo}>
                            <div onClick={openHomePage}>
                                <Image src={logo} ></Image>
                            </div>
                        </div>
                        <div className={styles.middle}>
                            {links.map((el, i) => {
                                return (
                                    <Link key={i} className={styles.navLink} href={`${el.link}`}>
                                        <div className={styles["nav-child"]}>{el.text}</div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className={styles.search} >
                            <input className={styles.searchInput} type="text" placeholder="Search here" />
                            <span class="material-symbols-outlined">search</span>
                        </div>
                        <div className={styles.auth}>
                            <Link className={styles.signupLnk} href={'/signinsignup?#'}>
                                <div className={styles.signupBtn}>{name}</div>
                            </Link>
                            {name != 'login/signup' ? <div onClick={doLogOut} className={styles.logoutBtn}>Logout</div> : ''}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export async function getServerSideProps(context) {
    console.log('hello');
}


        // <div>
        //     <Link href="/">Home</Link>
        //     <Link href="/about">About</Link>
        //     <Link href="/welcome">welcome</Link>
        //     <Link href="/products">products</Link>
        // </div>