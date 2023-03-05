import Link from "next/link"
import Image from "next/image"
import lawyer from "../images/lawyer.png"
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
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL)
    }, [])

    return (
        <div className={styles.front}>
            <span>
                <ToastContainer autoClose={2000} />
            </span>
            <div className={styles.left}>
                <div>
                    <div>Book</div>
                    <div>appointment</div>
                    <div>with Lawyer</div>
                </div>
                <div>
                    The Lawyer Appointment Booking App lets users book appointments with lawyers for legal advice, with a simple and secure payment system.
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
                <Image src={lawyer} />
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
