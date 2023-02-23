import style from './button.module.css'



const Input = ({ email, type, setEmail }) => {
    const handleInput = (event) => {
        console.log(event.target.value, 'll');
        setEmail(event.target.value)
    }
    console.log(email, type);
    return (
        <div>
            <input type={type} value={email} onChange={handleInput} className={style.input}></input>
        </div>
    )
}
const Button = ({ isClick, click, fun, text }) => {
    const handleclick = () => {
        click(true)
    }
    return (
        <div className={style.button} onClick={fun}>
            <div >{text == 'undefined' ? ('confirm') : (text)}</div>
        </div>
    )
}

module.exports = { Input, Button }