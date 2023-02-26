








import { ToastContainer, toast } from 'react-toastify';

export default function ({ slotId }) {
    const bookSlot = async () => {
        let data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/slotes/book/${slotId}`, {
            method: 'PATCH',
            credentials: 'include'
        })
        data = await data.json()
        if (data.msg == 'slot booked sucessfull') {
            toast.success("slot booked sucessfully", { theme: 'dark' })
        }
        console.log(data)
    }
    return (
        <>
            <ToastContainer autoClose={2000} />
            <button onClick={bookSlot}>Book this slot</button>
        </>
    )
}

const getServerSideProps = async ({ params }) => {

    const { slotId } = params

    return {
        props: { slotId }
    }
    // try {
    //     // let data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/slotes/${advocateId}`)
    //     // data = await data.json()
    //     // console.log(data)
    //     // console.log(data.data[1][0])
    // } catch (err) {
    //     console.log(err, 'getting error')
    //     return
    // }


    console.log(advocateId, 'k')
}
export { getServerSideProps }
