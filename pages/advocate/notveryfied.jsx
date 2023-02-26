import Router from 'next/router';


import styles from './notveryfied.module.css';


function VerificationMessage({ isVerified }) {
    return (
        <div className={styles.container}>
            <h1 className={`${isVerified == true ? styles.title_v : `${isVerified == false ? styles.title_n : styles.title_f}`}`}>
                {isVerified == true ? 'Verified' : `${isVerified == false ? 'Not Verified yet' : 'Varification Fail'}`}
            </h1>
            <p className={styles.text}>
                {isVerified == true
                    ? 'Your document has been successfully verified.'
                    : `${isVerified == false ? 'Your document is currently not verified' : 'Your document verification is failed'}`}
            </p>
            <div className={styles.circle}>
                <div className={`${styles.check} ${styles.visible}`}>
                    {/* <div className={styles.checkmark}></div> */}
                    {isVerified == true ? <img src='https://static.vecteezy.com/system/resources/previews/002/743/514/original/green-check-mark-icon-in-a-circle-free-vector.jpg' />
                        : <img className={`${isVerified == 'failed' ? styles.invisible : ''}`} src='https://i5.walmartimages.com/asr/0f4eb998-d1f0-4c8a-83f8-494c7b30bb9b.9e6e67ad2d8eed1dce497b91601ea919.jpeg' />}
                    {isVerified == 'failed' ? <img src='https://thumbs.dreamstime.com/b/failed-red-rubber-stamp-over-white-background-88412314.jpg' /> : ''}
                </div>
            </div>

        </div>
    );
}

export default function Home() {
    const isVerified = true; // Change to false if document is not verified

    return <VerificationMessage isVerified={isVerified} />;
}
// const notveryfied = () => {
//     return (
//         <div>We have capture your information our team will see and verify it</div>
//     )
// }

// export async function getServerSideProps({ req }) {
//     console.log(req.headers.cookie, 'coookiees')
//     const cookie = req.headers.cookie
//     let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/updatejwt`, {
//         method: 'GET',
//         credentials: 'include',
//         headers: {
//             cookie
//         }
//     })
//     console.log(res.url)
//     let newRes = await res.json()
//     console.log(newRes, 'response')
//     console.log(res.msg, newRes.redirect_uri, 'msg url')
//     if (newRes.msg == 'plg login again' || newRes.msg == 'plg login') {
//         return {
//             redirect: {
//                 destination: '/signinsignup', // The destination URL to redirect to
//                 permanent: false, // Set this to true if the redirect is permanent
//             },
//         }
//     }
//     else if (newRes.redirect_uri == '/advocate/dashboard') {
//         console.log(newRes.redirect_uri)
//         return {
//             redirect: {
//                 destination: newRes.redirect_uri, // The destination URL to redirect to
//                 permanent: false, // Set this to true if the redirect is permanent
//             },
//         }
//     } else {
//         return ({ props: {} })
//     }

// }

// export default notveryfied