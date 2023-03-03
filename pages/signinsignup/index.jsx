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
    console.log(process.env.NEXT_PUBLIC_GOOGLE_AUTH_SIGNUP, 'iiiii')
    console.log(process.env.NEXT_PUBLIC_GOOGLE_AUTH_SIGNUP, 'kll');
    Router.push(process.env.NEXT_PUBLIC_GOOGLE_AUTH_SIGNUP);
}

const googleSignin = () => {
    console.log('google login');
    console.log(process.env.NEXT_PUBLIC_GOOGLE_AUTH_LOGIN, 'oooooo')
    Router.push(process.env.NEXT_PUBLIC_GOOGLE_AUTH_LOGIN);
}
// const handelSignin = () => {
//     //handel sigin
//     console.log('handel sigin in');
// }
// const handelSignup = () => {
//     //handel sigup
//     console.log('handel sign up');
//     console.log(name, email, password, 'n');
// }


export default function Mainn({ isSignup, signupValue, signupPage, cookies }) {
    console.log(process.env.GOOGLE_AUTH_SIGNUP, 'clien-browser', cookies, 'clookies');

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
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [email2, setEmail2] = useState('')
    const [password2, setPassword2] = useState('')
    const containerClass = classNames(styles.container, {
        [styles['right-panel-active']]: isSignupActive
    });
    const openSignUpPage = () => {
        setIsSignupActive(true)
    }
    const openSignInPage = () => {
        setIsSignupActive(false)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    // console.log(this.state.name);
    const handleName = (event) => {
        setName(event.target.value)
    }

    const handlePassword2 = (event) => {
        setPassword2(event.target.value)
    }
    const handleEmail2 = (event) => {
        setEmail2(event.target.value)
    }

    const handelSignin = () => {
        //handel sigin
        console.log('handel sigin in');
        console.log(email2, password2, 'lk');

        let data = { email: email2, password: password2 }
        async function doSignIn() {
            let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/login`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(data),
                headers: { 'content-type': 'application/json' }
            })
            console.log(res.url)
            console.log(res, 'teting')
            let newRes = await res.json()
            console.log(newRes.redirect_uri);
            if (newRes.redirect_uri) {
                Router.push(newRes.redirect_uri)
            }
            console.log(res, 'lll');
            console.log(newRes, 'llllll');

            if (newRes.err) {
                if (res.status == 404) {
                    toast.error("User don't exist!", { theme: "dark" });
                    setPassword2('')
                    setEmail2('')
                    setTimeout(() => {
                        openSignUpPage()
                    }, 1500);
                } else {
                    toast.error("Bad Credentials", { theme: "dark" })
                    setPassword2('')
                }
            } else {
                toast.success("Logdin sucess", { theme: "dark" });
                // setTimeout(() => {
                //     openSignInPage()
                // }, 5000);

            }
            // clear field
            setEmail('')
            setName('')
            setPassword('')
        }
        doSignIn()
    }
    const handelSignup = () => {
        //handel sigup
        console.log('handel sign up');
        console.log(name, email, password, 'n');
        let data = { name, email, password }
        async function doSignUp() {
            let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/signup`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'content-type': 'application/json' }
            })
            res = await res.json()
            console.log(res, 'lrs');
            if (res.err) {
                toast.error("User allready exist ha ha!", { theme: "dark" });
                setTimeout(() => {
                    openSignInPage()
                }, 1000);
            } else {
                toast.success("Verify Your Email before signin", { theme: "dark" });
                setTimeout(() => {
                    openSignInPage()
                }, 10000);

            }
            // clear field
            setEmail('')
            setName('')
            setPassword('')
        }
        doSignUp()
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
                    <input type="text" placeholder="Name" value={name} onChange={handleName} className={styles.input} />
                    <input type="email" placeholder="Email" value={email} onChange={handleEmail} className={styles.input} />
                    <input type="password" value={password} placeholder="Password" onChange={handlePassword} className={styles.input} />
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
                    <input type="email" placeholder="Email" value={email2} onChange={handleEmail2} className={styles.input} />
                    <input type="password" placeholder="Password" value={password2} onChange={handlePassword2} className={styles.input} />
                    <a className={styles.a}>Forgot your password?</a>
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
                    signupValue: 'dng',
                    cookies: cookies
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
                    signupValue: 'user-dont-exist',
                    cookies: cookies
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
                signupValue: 1,
                cookies: cookies
            }
        }
    } else {
        return {
            props: {
                isSignup: true,
                signupPage: true,
                signupValue: 0,
                cookies: cookies
            }
        }
    }

}