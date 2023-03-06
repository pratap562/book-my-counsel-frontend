
// All admin components are called here or it is the main Page for admin
// You have to link this component to the main App


import React, { useEffect } from "react";
import { AdminNav } from "../../component/Admin/NavbarAdmin";
import { useState } from "react";
import { Pendingapplicants } from "../../component/Admin/Pendingapplicants";
import { Varifiedapplicants } from "../../component/Admin/Varifiedapplicants";
import { ToastContainer, toast } from 'react-toastify';

const data = [
    { user_id: 1, name: "Mohd Gauhar", picture: "https://images.pexels.com/photos/15557806/pexels-photo-15557806.jpeg?auto=compress&cs=tinysrgb&w=800", role_title: "Advocate Journal", pricing: 2221, document: "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=800", isVarified: true },
    { user_id: 1, name: "Mohd Gauhar", picture: "https://images.pexels.com/photos/15557806/pexels-photo-15557806.jpeg?auto=compress&cs=tinysrgb&w=800", role_title: "Advocate Journal", pricing: 2221, document: "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=800", isVarified: false },
    { user_id: 1, name: "Mohd Gauhar", picture: "https://images.pexels.com/photos/15557806/pexels-photo-15557806.jpeg?auto=compress&cs=tinysrgb&w=800", role_title: "Advocate Journal", pricing: 2221, document: "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=800", isVarified: true },
    { user_id: 1, name: "Mohd Gauhar", picture: "https://images.pexels.com/photos/15557806/pexels-photo-15557806.jpeg?auto=compress&cs=tinysrgb&w=800", role_title: "Advocate Journal", pricing: 2221, document: "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=800", isVarified: false },
    { user_id: 1, name: "Mohd Gauhar", picture: "https://images.pexels.com/photos/15557806/pexels-photo-15557806.jpeg?auto=compress&cs=tinysrgb&w=800", role_title: "Advocate Journal", pricing: 2221, document: "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=800", isVarified: true },
]

// http://localhost:3200/advocate/verify/pending?pages=1

const Admin = () => {
    let gone = false;
    const [pending, setPending] = useState('isActive');
    const [pageNo, setPageNo] = useState(1);
    const [varified, setVarified] = useState('notActive');
    const [dataa, setDataa] = useState([]);
    const [islastPage, setlastPage] = useState(false)

    const changePage = () => {
        setPageNo((prev) => prev + 1);
    };

    useEffect(() => {
        const fetchAdvocate = () => {
            setDataa([])
            let status
            if (pending == 'isActive') {
                status = 'pending'
            } else {
                status = 'done'
            }
            if (gone) {
                return () => { };
            }
            gone = true;
            console.log(status, 'yes');
            return async () => {
                console.log(
                    'url:',
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/advocate/verify/${status}?pages=${pageNo}`
                );
                let res = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/advocate/verify/${status}?pages=${pageNo}`,
                    {
                        method: 'GET',
                        credentials: 'include',
                    }
                );
                res = await res.json();
                console.log(res, 'json');
                if (res.msg) {
                    console.log('yeees')
                    toast.error(res.msg, { theme: 'dark' });
                } else if (res.err) {
                    toast.error(res.err, { theme: 'dark' });
                } else {
                    if (res.data.length < 6) {
                        setlastPage(true)
                    } else {
                        if (islastPage == true) {
                            setlastPage(false)
                        }
                    }
                    console.log(res, 'response');
                    setDataa(res.data);
                }
                gone = false; // reset the gone flag after the async operation completes
            };
        };
        console.log('stage1ss');
        fetchAdvocate()()
        // const fetchAdvocateFn = fetchAdvocate('pending');
        // fetchAdvocateFn(); // call the returned function from fetchAdvocate
        return () => {
            gone = true; // set gone flag to true when component unmounts to cancel any pending fetch requests
        };
    }, [pageNo, pending, varified]); // include pageNo as a dependency



    return (
        <div>
            <ToastContainer autoClose={2000} />
            <AdminNav pending={pending} setPending={setPending} setPageNo={setPageNo} varified={varified} setVarified={setVarified} />
            {pending == 'isActive' ? <Pendingapplicants data={dataa} setDataa={setDataa} islastPage={islastPage} setlastPage={setlastPage} pageNo={pageNo} setPageNo={setPageNo} /> : <Varifiedapplicants islastPage={islastPage} setlastPage={setlastPage} pageNo={pageNo} setPageNo={setPageNo} data={dataa} />}
        </div>

    )
}

export default Admin