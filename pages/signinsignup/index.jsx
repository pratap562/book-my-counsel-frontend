import styles from './index.module.css';
import { useState } from 'react';
import Image from 'next/image';
import google from '../../images/google3.svg'
import Router from 'next/router';
import cookie from 'cookie';
import classNames from 'classnames';
import { useEffect } from 'react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const googleSignup = () => {
    console.log('google signup');
    Router.push(process.env.GOOGLE_AUTH_SIGNUP);
}

const googleSignin = () => {
    console.log('google login');
    Router.push(process.env.GOOGLE_AUTH_LOGIN);
}
const handelSignin = () => {
    //handel sigin
    console.log('handel sigin in');
}
const handelSignup = () => {
    //handel sigup
    console.log('handel sign up');
}

export default function Mainn({ isSignup, signupValue, signupPage }) {
    console.log(process.env.GOOGLE_AUTH_SIGNUP, 'clien-browser');

    console.log(signupValue, 'bawal 3 se pehle');
    console.log(signupValue, 'bawal 3');
    useEffect(() => {
        if (isSignup && signupValue == 1) {
            toast.success("😎 Successfully Signup ");
            isSignup = false
        }
        if (isSignup && signupValue == 'dng') {
            console.log(signupValue, 'sllll');
            console.log(`dlkjsafdskljajfkdlasf;asdljf;ks ljljk asfljksdaf ljksfslkjdf`);
            toast.error("User allready exist ha ha!", { theme: "dark" });
            isSignup = false
            signupValue = ''
        }
        if (signupValue == 'user-dont-exist') {
            console.log('bawal theek');
            toast.error("User don't exist! signup first", { theme: "dark" });
            signupValue = ''
        }
    }, [])

    let [isSignupActive, setIsSignupActive] = useState(signupPage)
    const containerClass = classNames(styles.container, {
        [styles['right-panel-active']]: isSignupActive
    });
    const openSignUpPage = () => {
        setIsSignupActive(true)
    }
    const openSignInPage = () => {
        setIsSignupActive(false)
    }
    // useEffect(() => {
    // }, []);

    console.log(isSignup);
    return (
        <div className={containerClass} id="container">
            <ToastContainer autoClose={2000} />
            <div className={`form-container sign-up-container ${styles['form-container']} ${styles['sign-up-container']}`}>
                <form className={styles.form} action="#">
                    <h1 className={styles.h1} >Create Account</h1>
                    <div className={`social-container ${styles['social-container']}`} onClick={googleSignup}>
                        {/* <a href="#" className={`social ${styles.social}`}><i className="fab fa-facebook-f"></i></a> */}
                        <a href='#' className={`social ${styles.social}`}><Image src={google} ></Image></a>
                        {/* <a href="#" className={`social ${styles.social}`}><i className="fab fa-linkedin-in"></i></a> */}
                    </div>
                    <span className={styles.span}>or use your email for registration</span>
                    <input type="text" placeholder="Name" className={styles.input} />
                    <input type="email" placeholder="Email" className={styles.input} />
                    <input type="password" placeholder="Password" className={styles.input} />
                    <button className={styles.button} onClick={handelSignup}>Sign Up</button>
                </form>
            </div>
            <div className={`form-container sign-in-container ${styles['form-container']} ${styles['sign-in-container']}`}>
                <form className={styles.form} action="#">
                    <h1 className={styles.h1} >Sign in</h1>
                    <div className={`social-container ${styles['social-container']}`} >
                        {/* <a href="#" className={`social ${styles.social}`}><i className="fab fa-facebook-f"></i></a> */}
                        <a href='#' className={`social ${styles.social}`}><Image src={google} ></Image></a>
                        {/* <a href="#" className={`social ${styles.social}`}><i className="fab fa-linkedin-in"></i></a> */}
                    </div>
                    <span className={styles.span}>or use your email for registration</span>
                    <input type="text" placeholder="Name" className={styles.input} />
                    <input type="email" placeholder="Email" className={styles.input} />
                    <input type="password" placeholder="Password" className={styles.input} />
                    <button className={styles.button}>Sign Up</button>
                </form>
            </div>
            <div className={`form-container sign-in-container ${styles['form-container']} ${styles['sign-in-container']}`}>
                <form className={styles.form} action="#">
                    <h1 className={styles.h1} >Sign in</h1>
                    <div className={`social-container ${styles['social-container']}`} onClick={googleSignin}>
                        {/* <a href="#" className={`social ${styles.social}`}><i className="fab fa-facebook-f"></i></a> */}
                        <a href="#" className={`social ${styles.social}`}><Image src={google} ></Image></a>
                        {/* <a href="#" className={`social ${styles.social}`}><i className="fab fa-linkedin-in"></i></a> */}
                    </div>
                    <span className={styles.span}>or use your account</span>
                    <input type="email" placeholder="Email" className={styles.input} />
                    <input type="password" placeholder="Password" className={styles.input} />
                    <a href="#" className={styles.a}>Forgot your password?</a>
                    <button className={styles.button} onClick={handelSignin} >Sign In</button>
                </form>
            </div>
            <div className={`overlay-container ${styles['overlay-container']}`}>
                <div className={`overlay ${styles.overlay}`}>
                    <div className={`overlay-panel overlay-left ${styles['overlay-panel']} ${styles['overlay-left']}`}>
                        <h1 className={styles.h1} > Hello, Friend!</h1>
                        <p className={styles.p}>Enter your personal details and start journey with us</p>

                        <button className={`ghost ${styles.ghost}`} onClick={openSignInPage} id="signIn">Sign In</button>
                    </div>
                    <div className={`overlay-panel overlay-right ${styles['overlay-panel']}  ${styles['overlay-right']}`}>
                        <h1 className={styles.h1}>Welcome Back!</h1>
                        <p className={styles.p}>To keep connected with us please login with your personal info</p>
                        <button className={`ghost ${styles.special} ${styles.ghost}`} onClick={openSignUpPage} id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div >
    )
}


export async function getServerSideProps(context) {
    console.log(process.env.GOOGLE_AUTH_SIGNUP);
    // console.log(process.env.BACKEND_URL);
    const cookies = cookie.parse(context.req.headers.cookie || '');
    console.log(cookies);

    // const { query } = context
    // const { pagename } = query
    // console.log(pagename, 'oye oye zadu');


    if (cookies.userExist != undefined) {
        console.log(cookies.userExist, 'bawal machega');
        console.log(typeof (cookies.userExist), 'type');
        if (cookies.userExist == 'true') {
            console.log('chal gaya');
            context.res.setHeader('Set-Cookie', cookie.serialize('userExist', '', {
                maxAge: -1, // make the cookie expired
                path: '/', // the path
            }));
            return {
                props: {
                    isSignup: true,
                    signupPage: false,
                    signupValue: 'dng'
                }
            }
        } else if (cookies.userExist == 'false') {

            context.res.setHeader('Set-Cookie', cookie.serialize('userExist', '', {
                maxAge: -1, // make the cookie expired
                path: '/', // the path
            }));
            return {
                props: {
                    isSignup: false,
                    signupPage: true,
                    signupValue: 'user-dont-exist'
                }
            }

        }

    } else if (cookies.isSignup == 1) {
        // context.res.clearCookie('isSignup');
        context.res.setHeader('Set-Cookie', cookie.serialize('isSignup', '', {
            maxAge: -1, // make the cookie expired
            path: '/', // the path
        }));
        return {
            props: {
                isSignup: true,
                signupPage: false,
                signupValue: 1
            }
        }
    } else {
        return {
            props: {
                isSignup: true,
                signupPage: true,
                signupValue: 0
            }
        }
    }

}