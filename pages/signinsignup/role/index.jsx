// import next from 'next'
import { MODERN_BROWSERSLIST_TARGET } from 'next/dist/shared/lib/constants'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Input, Button } from '../../../component/button'
import style from './index.module.css'
import { useRouter } from 'next/router'
const ForgotPassword = () => {

    // let [email, setEmail] = useState('')
    const router = useRouter();
    let [user, setUser] = useState(false)
    let [advocate, setAdvocate] = useState(false)

    const resetPassword = () => {
        let data = { email }
        console.log(data);
        console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/passwordforgot`, 'url');
        const sendEmail = async () => {
            let res = fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/passwordforgot`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'content-type': 'application/json' }
            })
        }
        sendEmail()

    }
    const userOrAdvocate = (event) => {
        // if (event.target)
        console.log(event.target);
        console.log(event.target.innerText);
        if (event.target.innerText == 'Advocate') {
            router.push('/advocate/create');
        } else {
            localStorage.setItem('justlogdin', JSON.stringify(true))
            router.push('/advocate/list');

        }

    }
    return (
        <div className={style.container}>
            <div >
                <div>Choose your role</div>
                <Button text='User' fun={userOrAdvocate} />
                <Button text='Advocate' fun={userOrAdvocate} />
            </div>
        </div>
    )
}
module.exports = ForgotPassword 