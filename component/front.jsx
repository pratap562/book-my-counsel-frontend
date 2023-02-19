import Link from "next/link"
import Image from "next/image"
// import logo from "../images/logo.jpg"
import { use, useEffect } from "react";
import styles from "./front.module.css"
import { ToastContainer, toast } from 'react-toastify';
// import Style from "./navbar.css"

export default function Front({ justLogdin }) {

    useEffect(() => {
        if (justLogdin) {
            console.log('logdin yes');
            toast.success("logdin sucessfull😎")
        } else {
            console.log(justLogdin);
        }
        justLogdin = false
    }, [])
    return (
        <div className={styles.front}>
            <span>
                <ToastContainer autoClose={2000} />
            </span>
            <div className={styles.left}>
                <div>
                    <div>Easy</div>
                    <div>scheduling</div>
                    <div>ahead</div>
                </div>
                <div>
                    SchedulMeet is your scheduling automation platform for eliminating the back-and-forth emails for finding the perfect time — and so much more.
                </div>
                <div>
                    <input placeholder="Enter your email" />
                    <div>Sign up</div>
                </div>
                <div>
                    Create your free account. No credit card required
                </div>
            </div>
            <div className={styles.right}>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/46W8NE43rD54MveL20rPp5/e18c62fb5617db69691c4ec475005c06/Homepage-Hero-new.png?w=1366&h=1132&q=50&fm=webp" />
            </div>
        </div>
    )
}




export let getServerSideProps = async (context) => {
    console.log(process.env.BACKEND_URL, 'hello');
    const cookies = cookie.parse(context.req.headers.cookie || '');
    console.log(cookies, 'bello');

    // let data = await fetch(`${process.env.BACKEND_URL}/islogdin`)
    // data = await data.json()
    // console.log(data, 'dataaa');
    // if (data.msg == 'logdin') {
    //     return {
    //         props: {
    //             islogdin: true
    //         }
    //     }
    // } else {
    //     return {
    //         props: {
    //             islogdin: false
    //         }
    //     }
    // }

}
