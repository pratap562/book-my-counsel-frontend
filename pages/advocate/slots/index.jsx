// const UserModel = mongoose.model('user', mongoose.Schema({
//     advocate_id: { type: String, required: true },
//     client_id: { type: String, required: true },
//     canceled: { type: Boolean, default: false }
// }))
import style from './index.module.css'
import { useState } from "react"


let lastDate = new Date(); // initialize lastDate to the current date and time

function getNextDate(days) {
    if (days === 0) { // if days is 0, return the current date
        const currentDate = new Date();
        let year = currentDate.getFullYear();
        const month = currentDate.toLocaleString('default', { month: 'short' }); // get the abbreviated month name
        const day = currentDate.getDate();
        lastDate = new Date(year, currentDate.getMonth(), day); // update lastDate to the current date
        return `${day.toString().padStart(2, '0')}-${month}-${year}`;
    } else { // if days is greater than 0, increment the date by the specified number of days
        let year = lastDate.getFullYear();
        let month = lastDate.toLocaleString('default', { month: 'short' }); // get the abbreviated month name
        let day = lastDate.getDate() + days;
        while (day > new Date(year, lastDate.getMonth() + 1, 0).getDate()) { // increment the month and adjust the day if necessary
            day -= new Date(year, lastDate.getMonth() + 1, 0).getDate();
            const nextMonth = new Date(year, lastDate.getMonth() + 1, 1).toLocaleString('default', { month: 'short' }); // get the abbreviated month name for the next month
            if (month !== nextMonth) { // update the month if it changes
                month = nextMonth;
            }
            lastDate = new Date(year, lastDate.getMonth() + 1, 1); // set lastDate to the first day of the next month
            if (month === 'Jan') { // increment the year if necessary
                year++;
            }
        }
        lastDate = new Date(year, lastDate.getMonth(), day); // update lastDate to the next date
        return `${day.toString().padStart(2, '0')}-${month}-${year}`;
    }
}

const SLOT = () => {
    let [data, setData] = useState([
        [{ time: '8:00', truth: false }, { time: '9:00', truth: false }, { time: '10:00', truth: false }, { time: '11:00', truth: false }, { time: '12:00', truth: false }, { time: '13:00', truth: false }, { time: '14:00', truth: false }, { time: '15:00', truth: false }, { time: '16:00', truth: false }, { time: '17:00', truth: false }, { time: '18:00', truth: false }, { time: '19:00', truth: false }, { time: '20:00', truth: false }, { time: '21:00', truth: false }, { time: '22:00', truth: false }, { time: '00:00', truth: false }, { time: '01:00', truth: false }, { time: '02:00', truth: false }, { time: '03:00', truth: false }, { time: '04:00', truth: false }, { time: '05:00', truth: false }, { time: '06:00', truth: false }, { time: '07:00', truth: false }],
        [{ time: '8:00', truth: false }, { time: '9:00', truth: false }, { time: '10:00', truth: false }, { time: '11:00', truth: false }, { time: '12:00', truth: false }, { time: '13:00', truth: false }, { time: '14:00', truth: false }, { time: '15:00', truth: false }, { time: '16:00', truth: false }, { time: '17:00', truth: false }, { time: '18:00', truth: false }, { time: '19:00', truth: false }, { time: '20:00', truth: false }, { time: '21:00', truth: false }, { time: '22:00', truth: false }, { time: '00:00', truth: false }, { time: '01:00', truth: false }, { time: '02:00', truth: false }, { time: '03:00', truth: false }, { time: '04:00', truth: false }, { time: '05:00', truth: false }, { time: '06:00', truth: false }, { time: '07:00', truth: false }],
        [{ time: '8:00', truth: false }, { time: '9:00', truth: false }, { time: '10:00', truth: false }, { time: '11:00', truth: false }, { time: '12:00', truth: false }, { time: '13:00', truth: false }, { time: '14:00', truth: false }, { time: '15:00', truth: false }, { time: '16:00', truth: false }, { time: '17:00', truth: false }, { time: '18:00', truth: false }, { time: '19:00', truth: false }, { time: '20:00', truth: false }, { time: '21:00', truth: false }, { time: '22:00', truth: false }, { time: '00:00', truth: false }, { time: '01:00', truth: false }, { time: '02:00', truth: false }, { time: '03:00', truth: false }, { time: '04:00', truth: false }, { time: '05:00', truth: false }, { time: '06:00', truth: false }, { time: '07:00', truth: false }],
        [{ time: '8:00', truth: false }, { time: '9:00', truth: false }, { time: '10:00', truth: false }, { time: '11:00', truth: false }, { time: '12:00', truth: false }, { time: '13:00', truth: false }, { time: '14:00', truth: false }, { time: '15:00', truth: false }, { time: '16:00', truth: false }, { time: '17:00', truth: false }, { time: '18:00', truth: false }, { time: '19:00', truth: false }, { time: '20:00', truth: false }, { time: '21:00', truth: false }, { time: '22:00', truth: false }, { time: '00:00', truth: false }, { time: '01:00', truth: false }, { time: '02:00', truth: false }, { time: '03:00', truth: false }, { time: '04:00', truth: false }, { time: '05:00', truth: false }, { time: '06:00', truth: false }, { time: '07:00', truth: false }],
        [{ time: '8:00', truth: false }, { time: '9:00', truth: false }, { time: '10:00', truth: false }, { time: '11:00', truth: false }, { time: '12:00', truth: false }, { time: '13:00', truth: false }, { time: '14:00', truth: false }, { time: '15:00', truth: false }, { time: '16:00', truth: false }, { time: '17:00', truth: false }, { time: '18:00', truth: false }, { time: '19:00', truth: false }, { time: '20:00', truth: false }, { time: '21:00', truth: false }, { time: '22:00', truth: false }, { time: '00:00', truth: false }, { time: '01:00', truth: false }, { time: '02:00', truth: false }, { time: '03:00', truth: false }, { time: '04:00', truth: false }, { time: '05:00', truth: false }, { time: '06:00', truth: false }, { time: '07:00', truth: false }],
        [{ time: '8:00', truth: false }, { time: '9:00', truth: false }, { time: '10:00', truth: false }, { time: '11:00', truth: false }, { time: '12:00', truth: false }, { time: '13:00', truth: false }, { time: '14:00', truth: false }, { time: '15:00', truth: false }, { time: '16:00', truth: false }, { time: '17:00', truth: false }, { time: '18:00', truth: false }, { time: '19:00', truth: false }, { time: '20:00', truth: false }, { time: '21:00', truth: false }, { time: '22:00', truth: false }, { time: '00:00', truth: false }, { time: '01:00', truth: false }, { time: '02:00', truth: false }, { time: '03:00', truth: false }, { time: '04:00', truth: false }, { time: '05:00', truth: false }, { time: '06:00', truth: false }, { time: '07:00', truth: false }],
        [{ time: '8:00', truth: false }, { time: '9:00', truth: false }, { time: '10:00', truth: false }, { time: '11:00', truth: false }, { time: '12:00', truth: false }, { time: '13:00', truth: false }, { time: '14:00', truth: false }, { time: '15:00', truth: false }, { time: '16:00', truth: false }, { time: '17:00', truth: false }, { time: '18:00', truth: false }, { time: '19:00', truth: false }, { time: '20:00', truth: false }, { time: '21:00', truth: false }, { time: '22:00', truth: false }, { time: '00:00', truth: false }, { time: '01:00', truth: false }, { time: '02:00', truth: false }, { time: '03:00', truth: false }, { time: '04:00', truth: false }, { time: '05:00', truth: false }, { time: '06:00', truth: false }, { time: '07:00', truth: false }]
    ])

    const updateSlotStatus = (row, col) => {
        let prvStatus = data[row][col].truth
        console.log(prvStatus);
        return (() => {
            console.log(data[row][col].truth);
            let newData = [...data]
            console.log(newData[row][col].truth, 'nn');
            newData[row][col].truth = !data[row][col].truth
            console.log(newData);
            setData(newData)
        }
        )
    }

    let a = 'aaja'
    console.log(data, 'data');
    return (
        <div className={style.container}>
            <div className={style.headings}>
                <h1>Add Slots</h1>
            </div>
            <div className={style.week}>
                {data.map((days, i) => {
                    return (
                        <div className={style.day} key={i}>
                            <div className={style.date}>{getNextDate(i)}</div>
                            <div>
                                {days.map((time, j) => {
                                    return (
                                        [<div key={j} className={`${style.slot} ${style[data[i][j].truth]}`} onClick={updateSlotStatus(i, j)}>{time.time}</div>, (j + 1) % 3 == 0 ? <div className={style.line}></div> : (<></>)]
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
export default SLOT