// const UserModel = mongoose.model('user', mongoose.Schema({
//     advocate_id: { type: String, required: true },
//     client_id: { type: String, required: true },
//     canceled: { type: Boolean, default: false }
// }))
import style from './bookslots.module.css'
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { responseCheck } from '../../../utils/responseMiddleware'
import Router from 'next/router';

// let newData = [
//     [],
//     [
//         {
//             "_id": "63fa8275cdbad007b8932993",
//             "advocate_id": "63fa557590db07afb5f19536",
//             "client_id": "undefined",
//             "date": "27-Feb-2023",
//             "format_date": 20230227,
//             "time": 9,
//             "canceled": false,
//             "__v": 0
//         },
//         {
//             "_id": "63fa8275cdbad007b8932994",
//             "advocate_id": "63fa557590db07afb5f19536",
//             "client_id": "undefined",
//             "date": "27-Feb-2023",
//             "format_date": 20230227,
//             "time": 11,
//             "canceled": false,
//             "__v": 0
//         }
//     ],
//     [
//         {
//             "_id": "63fa8275cdbad007b8932996",
//             "advocate_id": "63fa557590db07afb5f19536",
//             "client_id": "undefined",
//             "date": "28-Feb-2023",
//             "format_date": 20230228,
//             "time": 9,
//             "canceled": false,
//             "__v": 0
//         }
//     ],
//     [],
//     [
//         {
//             "_id": "63fa8275cdbad007b8932997",
//             "advocate_id": "63fa557590db07afb5f19536",
//             "client_id": "undefined",
//             "date": "02-Mar-2023",
//             "format_date": 20230302,
//             "time": 9,
//             "canceled": false,
//             "__v": 0
//         }
//     ],
//     [],
//     []
// ]

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

    // useEffect(() => {
    //     let newData = [...data]
    //     for (let i = 0; i < 7; i++) {
    //         let tmp = getNextDate(i)
    //         for (let j = 0; j < 24; j++) {
    //             newData[i][j].date = tmp
    //             console.log(newData[i][j].date, 'daata', i, j)
    //         }
    //     }
    //     lastDate = new Date();
    //     console.log(newData, 'new');
    // }, [])



    const bookSlot = (row, col) => {
        // let prvStatus = data[row][col].truth
        // console.log(prvStatus);
        return (() => {
            // console.log(newData[row][col]._id)
            const slotId = newData[row][col]._id
            Router.push(`/advocate/bookslots/4/${slotId}`)
            // console.log(data[row][col].truth);
            // let newData = [...data]
            // console.log(newData[row][col].truth, 'nn');
            // newData[row][col].truth = !data[row][col].truth
            // console.log(newData);
            // setData(newData)
        }
        )
    }

    const addSlot = async () => {
        // send those slot which should book
        let slots = []
        data.forEach((day, i) => {
            day.forEach((slot) => {
                if (slot.truth) {
                    slots.push(slot)
                }
            })
        })
        // console.log(slots);
        let allSlots = { slots }

        let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/slotes/add`, {
            method: 'POST',
            body: JSON.stringify(allSlots),
            credentials: 'include',
            headers: { 'content-type': 'application/json' }
        })
        // console.log(res.status)
        responseCheck({ res, toast, fail_uri: '', pass_uri: '/advocate/dashboard' })
        res = await res.json()
        // console.log(res, res.status, 'resss');
    }

    let a = 'aaja'
    // console.log(data, 'data');
    return (
        <div className={style.container}>
            <ToastContainer autoClose={2000} />
            <div className={style.headings}>
                <h2>Add Slots</h2>
                <h2 className={style.submit} onClick={addSlot}>Submit</h2>
            </div>
            <div className={style.week}>
                {newData.map((days, i) => {
                    return (
                        <div className={style.day} key={i}>
                            <div className={style.date}>{getNextDate(i)}</div>
                            <div className={style.day_slots}>
                                {days.length == 0 ? [] : days.map((time, j) => {
                                    return (
                                        [<div key={j} className={`${style.slot} ${style.false}`} onClick={bookSlot(i, j)}>{`${time.time}:00`}</div>, (j + 1) % 3 == 0 ? <div className={style.line}></div> : (<></>)]
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const getServerSideProps = async ({ params }) => {

    const { advocateId } = params

    try {
        let data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/slotes/${advocateId}`)
        data = await data.json()
        console.log(data)
        console.log(data.data[1][0])
        return {
            props: { advocateId, newData: data.data }
        }
    } catch (err) {
        console.log(err, 'getting error')
    }


    console.log(advocateId, 'k')
}
export { getServerSideProps }

export default SLOT