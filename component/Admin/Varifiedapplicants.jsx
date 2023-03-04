import React, { useState } from "react";
import style from './adminNav.module.css'
import { AdminNav } from './NavbarAdmin'
import { Pagination } from './pagination.jsx'

const Varifiedapplicants = (props) => {
    const ApplicantsData = props.data
    const { pageNo, setPageNo, islastPage, setlastPage } = props

    const [applicants, setApplicants] = useState(ApplicantsData)
    const updateVarification = (index, isVarified) => {
        const update = [...applicants]
        update[index].isVarified = !isVarified
        setApplicants(update)
    }
    console.log(ApplicantsData, 'llloool')
    return (
        <div className={style["advocate-container"]}>

            {ApplicantsData.map((el, i) => {
                return (
                    <div key={el.user_id} className={style["advocate-list"]}>
                        <div className={style["profile-pic"]}>
                            <img src={el.picture} alt="" />
                        </div>
                        <div className={style["advocate-name"]}>
                            <h2 className="title">{el.name}</h2>
                        </div>
                        <div className={style["advocate-title"]}>
                            <h3 className="job-title">{el.role_title}</h3>
                        </div>
                        <div className={style["advocate-pricing"]}>
                            <p className="pricing">₹{el.pricing}</p>
                        </div>
                        <div className={style["advocate-doc"]}>
                            <a className="document" href={el.document} target={"_blank"}>View Document</a>
                        </div>
                    </div>
                )
            })}
            <Pagination pageNo={pageNo} islastPage={islastPage} setlastPage={setlastPage} setPageNo={setPageNo} />


        </div>
    )
}


export { Varifiedapplicants }