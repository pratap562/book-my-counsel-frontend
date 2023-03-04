import style from './dashboard.module.css'
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { responseCheck } from '../../utils/responseMiddleware'
import Router from 'next/router';
import { Button } from '../../component/button'
// import 
import { Navbar } from '@/component/navbar'

let lastDate = new Date();

const SLOT = ({ advocateId, newData }) => {

    console.log(newData)
    let [data, setData] = useState([
        [{ time: '8:00', truth: false, date: '' }, { time: '9:00', truth: false, date: '' }, { time: '10:00', truth: false, date: '' }, { time: '11:00', truth: false, date: '' }, { time: '12:00', truth: false, date: '' }, { time: '13:00', truth: false, date: '' }, { time: '14:00', truth: false, date: '' }, { time: '15:00', truth: false, date: '' }, { time: '16:00', truth: false, date: '' }, { time: '17:00', truth: false, date: '' }, { time: '18:00', truth: false, date: '' }, { time: '19:00', truth: false, date: '' }, { time: '20:00', truth: false, date: '' }, { time: '21:00', truth: false, date: '' }, { time: '22:00', truth: false, date: '' }, { time: '23:00', truth: false, date: '' }, { time: '00:00', truth: false, date: '' }, { time: '01:00', truth: false, date: '' }, { time: '02:00', truth: false, date: '' }, { time: '03:00', truth: false, date: '' }, { time: '04:00', truth: false, date: '' }, { time: '05:00', truth: false, date: '' }, { time: '06:00', truth: false, date: '' }, { time: '07:00', truth: false, date: '' }],
        [{ time: '8:00', truth: false, date: '' }, { time: '9:00', truth: false, date: '' }, { time: '10:00', truth: false, date: '' }],
        [{ time: '8:00', truth: false, date: '' }, { time: '9:00', truth: false, date: '' }, { time: '10:00', truth: false, date: '' }, { time: '11:00', truth: false, date: '' }, { time: '12:00', truth: false, date: '' }, { time: '13:00', truth: false, date: '' }, { time: '14:00', truth: false, date: '' }, { time: '15:00', truth: false, date: '' }, { time: '16:00', truth: false, date: '' }, { time: '17:00', truth: false, date: '' }, { time: '18:00', truth: false, date: '' }, { time: '19:00', truth: false, date: '' }, { time: '20:00', truth: false, date: '' }, { time: '21:00', truth: false, date: '' }, { time: '22:00', truth: false, date: '' }, { time: '23:00', truth: false, date: '' }, { time: '00:00', truth: false, date: '' }, { time: '01:00', truth: false, date: '' }, { time: '02:00', truth: false, date: '' }, { time: '03:00', truth: false, date: '' }, { time: '04:00', truth: false, date: '' }, { time: '05:00', truth: false, date: '' }, { time: '06:00', truth: false, date: '' }, { time: '07:00', truth: false, date: '' }],
        [{ time: '8:00', truth: false, date: '' }, { time: '11:00', truth: false, date: '' }, { time: '12:00', truth: false, date: '' }, { time: '13:00', truth: false, date: '' }, { time: '14:00', truth: false, date: '' }, { time: '15:00', truth: false, date: '' }, { time: '16:00', truth: false, date: '' }, { time: '17:00', truth: false, date: '' }, { time: '18:00', truth: false, date: '' }, { time: '19:00', truth: false, date: '' }, { time: '20:00', truth: false, date: '' }, { time: '21:00', truth: false, date: '' }, { time: '22:00', truth: false, date: '' }, { time: '23:00', truth: false, date: '' }, { time: '00:00', truth: false, date: '' }, { time: '01:00', truth: false, date: '' }, { time: '02:00', truth: false, date: '' }, { time: '03:00', truth: false, date: '' }, { time: '04:00', truth: false, date: '' }, { time: '05:00', truth: false, date: '' }, { time: '06:00', truth: false, date: '' }, { time: '07:00', truth: false, date: '' }],
        [{ time: '8:00', truth: false, date: '' }, { time: '9:00', truth: false, date: '' }, { time: '10:00', truth: false, date: '' }, { time: '11:00', truth: false, date: '' }, { time: '12:00', truth: false, date: '' }, { time: '13:00', truth: false, date: '' }, { time: '14:00', truth: false, date: '' }, { time: '15:00', truth: false, date: '' }, { time: '16:00', truth: false, date: '' }, { time: '17:00', truth: false, date: '' }, { time: '18:00', truth: false, date: '' }, { time: '19:00', truth: false, date: '' }, { time: '20:00', truth: false, date: '' }, { time: '21:00', truth: false, date: '' }, { time: '22:00', truth: false, date: '' }, { time: '23:00', truth: false, date: '' }, { time: '00:00', truth: false, date: '' }, { time: '01:00', truth: false, date: '' }, { time: '02:00', truth: false, date: '' }, { time: '03:00', truth: false, date: '' }, { time: '04:00', truth: false, date: '' }, { time: '05:00', truth: false, date: '' }, { time: '06:00', truth: false, date: '' }, { time: '07:00', truth: false, date: '' }],
        [{ time: '8:00', truth: false, date: '' }, { time: '9:00', truth: false, date: '' }, { time: '10:00', truth: false, date: '' }, { time: '11:00', truth: false, date: '' }, { time: '12:00', truth: false, date: '' }, { time: '13:00', truth: false, date: '' }, { time: '14:00', truth: false, date: '' }, { time: '15:00', truth: false, date: '' }, { time: '16:00', truth: false, date: '' }, { time: '17:00', truth: false, date: '' }, { time: '18:00', truth: false, date: '' }, { time: '19:00', truth: false, date: '' }, { time: '20:00', truth: false, date: '' }, { time: '21:00', truth: false, date: '' }, { time: '22:00', truth: false, date: '' }, { time: '23:00', truth: false, date: '' }, { time: '00:00', truth: false, date: '' }, { time: '01:00', truth: false, date: '' }, { time: '02:00', truth: false, date: '' }, { time: '03:00', truth: false, date: '' }, { time: '04:00', truth: false, date: '' }, { time: '05:00', truth: false, date: '' }, { time: '06:00', truth: false, date: '' }, { time: '07:00', truth: false, date: '' }],
        [{ time: '8:00', truth: false, date: '' }, { time: '9:00', truth: false, date: '' }, { time: '10:00', truth: false, date: '' }, { time: '11:00', truth: false, date: '' }, { time: '12:00', truth: false, date: '' }, { time: '13:00', truth: false, date: '' }, { time: '14:00', truth: false, date: '' }, { time: '15:00', truth: false, date: '' }, { time: '16:00', truth: false, date: '' }, { time: '17:00', truth: false, date: '' }, { time: '18:00', truth: false, date: '' }, { time: '19:00', truth: false, date: '' }, { time: '20:00', truth: false, date: '' }, { time: '21:00', truth: false, date: '' }, { time: '22:00', truth: false, date: '' }, { time: '23:00', truth: false, date: '' }, { time: '00:00', truth: false, date: '' }, { time: '01:00', truth: false, date: '' }, { time: '02:00', truth: false, date: '' }, { time: '03:00', truth: false, date: '' }, { time: '04:00', truth: false, date: '' }, { time: '05:00', truth: false, date: '' }, { time: '06:00', truth: false, date: '' }, { time: '07:00', truth: false, date: '' }]
    ])


    function getNextDate(days) {
        const currentDate = new Date();
        const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
        if (days === 0) {
            lastDate = currentDate;
        } else {
            lastDate.setTime(lastDate.getTime() + oneDay);
        }
        const year = lastDate.getFullYear();
        const month = lastDate.toLocaleString('default', { month: 'short' });
        const day = lastDate.getDate();
        let res = `${day.toString().padStart(2, '0')}-${month}-${year}`;
        return res
    }



    const bookSlot = (row, col) => {
        return (() => {
            const slotId = newData[row][col]._id
            Router.push(`/advocate/bookslots/4/${slotId}`)
        }
        )
    }

    const createSlot = () => {
        Router.push('/advocate/slots')
    }
    // const addSlot = async () => {
    //     // send those slot which should book
    //     let slots = []
    //     data.forEach((day, i) => {
    //         day.forEach((slot) => {
    //             if (slot.truth) {
    //                 slots.push(slot)
    //             }
    //         })
    //     })
    //     // console.log(slots);
    //     let allSlots = { slots }

    //     let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/slotes/add`, {
    //         method: 'POST',
    //         body: JSON.stringify(allSlots),
    //         credentials: 'include',
    //         headers: { 'content-type': 'application/json' }
    //     })
    //     // console.log(res.status)
    //     responseCheck({ res, toast, fail_uri: '', pass_uri: '/advocate/dashboard' })
    //     res = await res.json()
    //     // console.log(res, res.status, 'resss');
    // }

    let a = 'aaja'
    // console.log(data, 'data');
    return (
        <>
            <div className={style.nav}>
                <Navbar></Navbar>
            </div>
            {newData.length == 0 ? [<div onClick={createSlot} className={style.nothingParent}><div className={style.nothing}>Nothing to show here</div>, <Button text='create-slots' /></div>] :
                <div className={style.container}>
                    <ToastContainer autoClose={2000} />
                    <div className={style.headings}>
                        <h2>Dashboard</h2>
                        {/* <h2 className={style.submit} onClick={addSlot}>Submit</h2> */}
                    </div>
                    <div className={style.week}>
                        {newData.map((days, i) => {
                            return (
                                <div className={style.day} key={i}>
                                    <div className={style.date}>{getNextDate(i)}</div>
                                    <div className={style.day_slots}>
                                        {days.length == 0 ? [] : days.map((time, j) => {
                                            return (
                                                [<div key={j} className={`${style.slot} ${style.false} ${time.client_id == 'undefined' ? style.openn : style.bookedd} `}>
                                                    <div>
                                                        {`${time.time}:00`}
                                                    </div>
                                                    {time.client_id == 'undefined' ? <div className={style.open}>Open</div> : <div className={style.booked} >Booked</div>}
                                                </div>, (j + 1) % 3 == 0 ? <div className={style.line}></div> : (<></>)]
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </>
    )
}

const getServerSideProps = async (context) => {

    const { req } = context;
    const { cookies } = req;
    console.log(cookies, 'cooki')

    // You can now access the cookies using the cookies object
    const { token, refresh_token } = cookies
    console.log(token)
    console.log('tokn')
    console.log(refresh_token, 'ref')
    console.log(`${process.env.BACKEND_URL}/slotes/my/all`, 'urllllllllll')
    if (token == undefined || token == '') {
        return {
            redirect: {
                destination: '/signinsignup',
                permanent: false,
            }
        }
    }

    try {
        let data = await fetch(`${process.env.BACKEND_URL}/slotes/my/all`, {
            method: "GET",
            credentials: 'include',
            headers: { token, refresh_token }
        })
        data = await data.json()
        console.log(data)
        if (data.err) {
            return {
                props: { newData: [] }
            }
        } else {
            return {
                props: { newData: data.data }
            }
        }
        // console.log(data.data[1][0])
    } catch (err) {
        console.log(err, 'getting error')
        return {
            props: { newData: [] }
        }
        return
    }

    console.log(advocateId, 'k')
}
export { getServerSideProps }

export default SLOT