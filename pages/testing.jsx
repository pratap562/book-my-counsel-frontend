import Router from "next/router";
import fun from "./advocate/test";

export default function () {

    const open = () => {
        Router.push('/el')
    }
    return (
        <div onClick={open}>click me</div>
    )
}