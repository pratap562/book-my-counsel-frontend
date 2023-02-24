
// All admin components are called here or it is the main Page for admin
// You have to link this component to the main App

import React from "react";
import { AdminNav } from "./NavbarAdmin";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Allapplicants } from "./Allapplicants";
import { Pendingapplicants } from "./Pendingapplicants";
import { Varifiedapplicants } from "./Varifiedapplicants";
import { AdminHome } from "./AdminHome";
// import "./adminNav.css"
const Admin = ()=>{
    return (
        <div>
            <BrowserRouter>
            <AdminNav/>
            <Routes>
                <Route path="/" exact element={<AdminHome/>}/>
                <Route path="/Allapplicants" exact element={<Allapplicants/>}/>
                <Route path="/Pendingapplicants" exact element={<Pendingapplicants/>}/>
                <Route path="/Varifiedapplicants" exact element={<Varifiedapplicants/>}/>
            </Routes>
            </BrowserRouter>
        </div>

    )
}

export {Admin}