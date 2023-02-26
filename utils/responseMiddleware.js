import Router from "next/router"

const responseCheck = ({ res, toast, fail_uri, pass_uri }) => {
    console.log(res.status, 'statt')
    if (res.status == 401) {
        toast.error("Unautharized", { theme: "dark" })
        if (fail_uri) {
            setTimeout(() => {
                Router.push(fail_uri)
            }, 1000);
        }
    } else if (res.status == 501 || res.status == 500) {
        toast.error("Try after some time", { them: 'dark' })
        if (fail_uri) {
            setTimeout(() => {
                Router.push(fail_uri)
            }, 1000);
        }
    } else if (res.status == 201) {
        toast.success("Sucessfully created", { theme: "dark" })
        if (pass_uri) {
            setTimeout(() => {
                Router.push(pass_uri)
            }, 1000);
        }
    }
}
export { responseCheck }