import React from "react";
// import { withRouter } from "react-router-dom"
import style from '../../pages/paymentPage/payment.module.css'
const Payment = (props) => {
    // console.log(props.props);
    let { slotId } = props.props[0]
    const bookSlot = async () => {
        let data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/slotes/book/${slotId}`, {
            method: 'PATCH',
            credentials: 'include'
        })
        // data = await data.json()
        // if (data.msg == 'slot booked sucessfull') {
        //     toast.success("slot booked sucessfully", { theme: 'dark' })
        // } else if (data.err || data.msg == 'plg login' || data.msg == 'plg login again') {
        //     let msg = ''
        //     if (data.err) {
        //         msg = data.err
        //     } else if (data.msg) {
        //         msg = data.msg
        //     }
        //     toast.error(msg, { theme: 'dark' })
        // }
        // console.log(data)
        // handlePayment()
    }
    const handlePayment = async () => {

        try {
            const res = await fetch("http://localhost:3200/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(props.props),
            })
            const result = await res.json()
            console.log(result);
            window.location = result.url
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <button className={style["payment-btn"]} onClick={() => bookSlot()}>Pay Now</button>
    )
}

export { Payment }

// export component and pass Advocate Data like name, image, priceing