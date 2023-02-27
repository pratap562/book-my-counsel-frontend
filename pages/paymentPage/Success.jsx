import React from "react";
import style from './payment.module.css'
const Success = () => {
    return (
        <div className={style["success-div"]}>
            <div className={style["success"]}>
                <img className={style["success-img"]} src="https://cdn-icons-png.flaticon.com/512/7322/7322265.png" alt="LOGO" />
            </div>
            <h1>Your appointment was successfully scheduled.</h1>
            <p>You will receive an email with your appointment information.</p>
        </div>
    )
}

export default Success