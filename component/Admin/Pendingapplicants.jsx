import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import style from './adminNav.module.css'
import { AdminNav } from './NavbarAdmin'
import { Pagination } from "./pagination";

const Pendingapplicants = (props) => {
    const { data: ApplicantsData, setDataa, pageNo, setPageNo, islastPage, setlastPage } = props
    console.log(ApplicantsData, 'applicantdata')
    // http://localhost:3200/advocate/verify/3lknsdifnkef9303
    const [applicants, setApplicants] = useState(ApplicantsData)
    const approve = (user_id, index) => {
        return async () => {
            let res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/advocate/verify/${user_id}`,
                {
                    method: 'PATCH',
                    credentials: 'include',
                }
            );
            res = await res.json();
            console.log(res, 'json');
            if (res.msg == 'sucessful verifieddd') {
                toast.success('Advocate Verified', { theme: 'dark' });
                let tmp = [...ApplicantsData]
                tmp.splice(index, 1)
                setDataa(tmp)
            } else if (res.err) {
                toast.error(res.err, { theme: 'dark' });
            } else if (res.msg) {
                toast.error(res.msg, { theme: 'dark' })
            }
        }
    }
    const remove = (user_id, index) => {
        return async () => {
            let res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/advocate/verify/${user_id}`,
                {
                    method: 'DELETE',
                    credentials: 'include',
                }
            );
            res = await res.json();
            console.log(res, 'json');
            if (res.msg == 'aspire advocate sucessfull removed') {
                toast.error('Advocate Removed', { theme: 'dark' });
                let tmp = [...ApplicantsData]
                tmp.splice(index, 1)
                setDataa(tmp)
            } else if (res.err) {
                toast.error(res.err, { theme: 'dark' });
            } else if (res.msg) {
                toast.error(res.msg, { theme: 'dark' })
            }
        }
    }


    return (
        <>
            <ToastContainer autoClose={2000} />
            <div className={style["advocate-container"]}>
                {ApplicantsData.map((el, i) => {
                    return (
                        <div key={el.user_id} className={style["advocate-list"]}>
                            <div className={style["profile-pic"]}>
                                <img src={el.picture} alt="" />
                            </div>
                            <div className={style["advocate-name"]}>
                                <h2 className={style["title"]}>{el.name}</h2>
                            </div>
                            <div className={style["advocate-title"]}>
                                <h3 className={style["job-title"]}>{el.role_title}</h3>
                            </div>
                            <div className={style["advocate-pricing"]}>
                                <p className={style["pricing"]}>₹{el.pricing}</p>
                            </div>
                            <div className={style["advocate-doc"]}>
                                <a className={style["document"]} href={el.document} target={"_blank"}>View Document</a>
                            </div>
                            <div className={style["varification"]}>
                                <button onClick={approve(el.user_id, i)}>Approved</button>
                                <button onClick={remove(el.user_id, i)}>Remove</button>
                            </div>
                        </div>
                    )
                })}
                <Pagination pageNo={pageNo} islastPage={islastPage} setlastPage={setlastPage} setPageNo={setPageNo} />

            </div>
        </>
    )
}

export { Pendingapplicants }