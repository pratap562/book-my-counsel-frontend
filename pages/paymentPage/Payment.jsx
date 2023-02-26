import React from "react";
import {withRouter} from "react-router-dom"
const Payment = (props)=>{
    // console.log(props.props);
    const handlePayment = async()=>{

        try {
            const res =  await fetch("http://localhost:3200/create-checkout-session", {
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
    return(
        <button className="payment-btn" onClick={()=> handlePayment()}>Pay Now</button>
    )
}

export {Payment}

// export component and pass Advocate Data like name, image, priceing