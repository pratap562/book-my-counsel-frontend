import style from './pagination.module.css'

const Pagination = (props) => {
    const { pageNo, setPageNo, islastPage, setlastPage } = props
    console.log(pageNo, setPageNo, 'pagenooo')
    const changePage = (change) => {
        return () => {
            if (change == -1 && pageNo > 1) {
                setPageNo((prv) => prv - 1)
            } else if (change == 1) {
                if (!islastPage) {
                    setPageNo((prv) => prv + 1)
                }
            }
        }
    }
    return (
        <div className={style.main}>
            <button onClick={changePage(-1)} className={style.btn}>Prv page</button>
            <button onClick={changePage(1)} className={style.btn}>Nxt page</button>
        </div>
    )
}

export { Pagination }