import style from './advocatelist.module.css'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';

const advocatelist = () => {
    useEffect(() => {
        let justLogdin = (localStorage.getItem('justlogdin'))
        localStorage.removeItem('justlogdin')
        console.log(justLogdin, 'justo');
        if (justLogdin === "true") {
            console.log('logdin yes');
            console.log(justLogdin, 'y');
            toast.success("logdin sucessfull😎")
        } else {
            console.log(justLogdin, 'nottrue');
        }
    }, [])
    return (
        <div>
            <ToastContainer autoClose={2000} />
            <div className={style.advocatelist}>Advocate list</div>
        </div>
    )
}
export default advocatelist