import Router from 'next/router';
import cookieparser from '../../utils/cookieparser'
import { serialize } from 'cookie'

import styles from './notveryfied.module.css';
import { isValidElement, useEffect, useState } from 'react';


function VerificationMessage({ isVerified }) {
    console.log(isVerified, 'verified')

    const openDashboard = () => {
        Router.push('/advocate/dashboard')
    }
    console.log(isVerified, 'isvei')
    return (
        <div className={styles.container}>
            <h1 className={`${isVerified == true ? styles.title_v : `${isVerified == false ? styles.title_n : styles.title_f}`}`}>
                {isVerified == true ? 'Verified' : `${isVerified == false ? 'verification is in process' : 'Varification Fail'}`}
            </h1>
            <p className={styles.text}>
                {isVerified == true
                    ? 'Your document has been successfully verified.'
                    : `${isVerified == false ? 'Your document is submitted We will verify you' : 'Your document verification is failed'}`}
            </p>
            <div className={styles.circle}>
                <div className={`${styles.check} ${styles.visible}`}>
                    {/* <div className={styles.checkmark}></div> */}
                    {isVerified == true ? <img src='https://static.vecteezy.com/system/resources/previews/002/743/514/original/green-check-mark-icon-in-a-circle-free-vector.jpg' />
                        : <img className={`${isVerified == 'failed' ? styles.invisible : ''}`} src='https://i5.walmartimages.com/asr/0f4eb998-d1f0-4c8a-83f8-494c7b30bb9b.9e6e67ad2d8eed1dce497b91601ea919.jpeg' />}
                    {isVerified == 'failed' ? <img src='https://thumbs.dreamstime.com/b/failed-red-rubber-stamp-over-white-background-88412314.jpg' /> : ''}
                    {isVerified == true ? <button className={styles.dashboard} onClick={openDashboard}>Go to Dashboard</button> : ""}
                </div>
            </div>

        </div>
    );
}

export default function Home() {
    const [dataFetched, setDataFetched] = useState(false)
    let [isVerified, setIsVerified] = useState(false)
    // isVerified = false
    useEffect(() => {
        const updateJwt = async () => {
            let ress = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/updatejwt`, {
                method: 'GET',
                credentials: 'include'
            })
            let newRes = await ress.json()
            if (newRes.msg == 'plg login again' || newRes.msg == 'plg login') {
                Router.push('/signinsignup?#')
            } else if (newRes.msg == 'varification fail') {
                isVerified = 'fail'
            } else if (newRes.msg == "verifyed sucessfully") {
                isVerified = true
            } else {
                isVerified = false
            }
            console.log(isVerified, 'isveififi')
            setIsVerified(isVerified)
            setDataFetched(true)
        }
        updateJwt()
    })

    return (
        <>
            {dataFetched ? <VerificationMessage isVerified={isVerified} /> : <div>Loading...</div>}
        </>
    )
}

