import React from "react";

const Success = ()=>{
    return(
        <div className="success-div">
            <div className="success">
                <img className="success-img" src="https://cdn-icons-png.flaticon.com/512/7322/7322265.png" alt="LOGO" />
            </div>
            <h1>Your appointment was successfully scheduled.</h1>
            <p>You will receive an email with your appointment information.</p>
        </div>
    )
}

export {Success}