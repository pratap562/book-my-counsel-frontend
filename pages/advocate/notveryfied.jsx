import Router from 'next/router';
import cookieparser from '../../utils/cookieparser'
import { serialize } from 'cookie'

import styles from './notveryfied.module.css';


function VerificationMessage({ isVerified }) {
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

export default function Home({ isVerified }) {

    return <VerificationMessage isVerified={isVerified} />;
}


export async function getServerSideProps(context) {
    // console.log(req.headers.cookie, 'coookiees')
    const cookie = context.req.headers.cookie
    let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/updatejwt`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            cookie
        }
    })
    const options = {
        httpOnly: true,
        path: '/',
        maxAge: 3600,
    };
    // const cookies = res.headers.get('set-cookie');
    let newRes = await res.json()
    console.log(newRes, 'newres')
    const { token, refresh_token } = newRes
    console.log(token, refresh_token, 'i')
    const serializedCookie = serialize('token', token, options);
    context.res.setHeader('Set-Cookie', serializedCookie);
    const serializedCookie2 = serialize('refresh_token', refresh_token, options);
    context.res.setHeader('Set-Cookie', serializedCookie);

    if (newRes.msg == 'plg login again' || newRes.msg == 'plg login') {
        return {
            redirect: {
                destination: '/signinsignup', // The destination URL to redirect to
                permanent: false, // Set this to true if the redirect is permanent
            },
        }
    } else if (newRes.msg == 'varification fail') {
        return {
            props: {
                isVerified: 'failed'
            }
        }
    } else if (newRes.msg == "verifyed sucessfully") {
        return {
            props: {
                isVerified: true
            }
        }
    } else {
        return {
            props: {
                isVerified: false
            }
        }
    }

}

// export default notveryfied