import { ToastContainer, toast } from 'react-toastify';
import style from './bookslots.module.css'
import { Payment } from '../../../component/payments/Payment'
export default function ({ slotId }) {
    let dataaa = [{ name: 'Book My Councel', pricing: 300, slotId, image: 'https://i.ibb.co/10VdkVn/Book-My-Counsel-1.png' }]
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
}
export { getServerSideProps }
