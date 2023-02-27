import { ToastContainer, toast } from 'react-toastify';
import style from './bookslots.module.css'
import { Payment } from '../../../component/payments/Payment'
export default function ({ slotId }) {
    const bookSlot = async () => {
        let data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/slotes/book/${slotId}`, {
            method: 'PATCH',
            credentials: 'include'
        })
        data = await data.json()
        if (data.msg == 'slot booked sucessfull') {
            toast.success("slot booked sucessfully", { theme: 'dark' })
        } else if (data.err || data.msg == 'plg login' || data.msg == 'plg login again') {
            let msg = ''
            if (data.err) {
                msg = data.err
            } else if (data.msg) {
                msg = data.msg
            }
            toast.error(msg, { theme: 'dark' })
        }
        console.log(data)
    }
    let dataaa = [{ name: 'Book My Councel', pricing: 459, slotId, image: 'https://i.ibb.co/10VdkVn/Book-My-Counsel-1.png' }]
    return (
        <div className={style.container}>
            <ToastContainer autoClose={2000} />


            <Payment props={dataaa}></Payment>
            {/* <button className={style.button} onClick={bookSlot}>Book this slot</button> */}
        </div>
    )
}

const getServerSideProps = async ({ params }) => {

    const { slotId } = params

    return {
        props: { slotId }
    }
    // try {
    //     // let data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/slotes/${advocateId}`)
    //     // data = await data.json()
    //     // console.log(data)
    //     // console.log(data.data[1][0])
    // } catch (err) {
    //     console.log(err, 'getting error')
    //     return
    // }


    console.log(advocateId, 'k')
}
export { getServerSideProps }
