import Link from "next/link"
import Image from "next/image"
import logo from "../images/logo.jpg"
import styles from "./navbar.module.css"
// import Style from "./navbar.css"


export const Navbar = () => {
    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <div>
                        <Image src={logo} ></Image>
                    </div>
                    <div>SchedulMeet</div>
                </div>
                <div className={styles.middle}>
                    <div>Individuals</div>
                    <div>Teams</div>
                    <div>Enterprise</div>
                    <div>Product</div>
                    <div>Priceing</div>
                    <div>Resources</div>
                </div>
                <div className={styles.auth}>
                    <Link className={styles.signupLnk} href={'/signinsignup'}>
                        <div className={styles.signupBtn}>Login/signup</div>
                    </Link>
                </div>
            </div>
        </div>
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