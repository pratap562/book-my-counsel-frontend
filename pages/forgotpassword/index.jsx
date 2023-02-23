import { MODERN_BROWSERSLIST_TARGET } from 'next/dist/shared/lib/constants'
import { useEffect, useState } from 'react'
import { Input, Button } from '../../component/button'
import style from './index.module.css'
const ForgotPassword = () => {

    let [email, setEmail] = useState('')
    let [isClick, click] = useState(false)

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
    return (
        <div className={style.container}>
            <div >
                <div>Email</div>
                <Input type='text' email={email} setEmail={setEmail} />
                <Button isClick={isClick} fun={resetPassword} click={click} />
            </div>
        </div>
    )
}
export default ForgotPassword