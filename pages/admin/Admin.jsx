
// All admin components are called here or it is the main Page for admin
// You have to link this component to the main App


import React from "react";
import { AdminNav } from "./NavbarAdmin";
import {BrowserRouter,Routes,Route} from "react-router-dom"

import { Pendingapplicants } from "./Pendingapplicants";
import { Varifiedapplicants } from "./Varifiedapplicants";
import { AdminHome } from "./AdminHome";
// import "./adminNav.css"

const data = [
    {user_id: 1, name: "Mohd Gauhar", picture: "https://images.pexels.com/photos/15557806/pexels-photo-15557806.jpeg?auto=compress&cs=tinysrgb&w=800", role_title: "Advocate Journal", pricing: 2221, document: "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=800", isVarified: true},
    {user_id: 1, name: "Mohd Gauhar", picture: "https://images.pexels.com/photos/15557806/pexels-photo-15557806.jpeg?auto=compress&cs=tinysrgb&w=800", role_title: "Advocate Journal", pricing: 2221, document: "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=800", isVarified: false},
    {user_id: 1, name: "Mohd Gauhar", picture: "https://images.pexels.com/photos/15557806/pexels-photo-15557806.jpeg?auto=compress&cs=tinysrgb&w=800", role_title: "Advocate Journal", pricing: 2221, document: "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=800", isVarified: true},
    {user_id: 1, name: "Mohd Gauhar", picture: "https://images.pexels.com/photos/15557806/pexels-photo-15557806.jpeg?auto=compress&cs=tinysrgb&w=800", role_title: "Advocate Journal", pricing: 2221, document: "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=800", isVarified: false},
    {user_id: 1, name: "Mohd Gauhar", picture: "https://images.pexels.com/photos/15557806/pexels-photo-15557806.jpeg?auto=compress&cs=tinysrgb&w=800", role_title: "Advocate Journal", pricing: 2221, document: "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=800", isVarified: true},
]

const Admin = ()=>{
    return (
        <div>
            <BrowserRouter>
            <AdminNav/>
            <Routes>
                <Route path="/" exact element={<AdminHome/>}/>
                <Route path="/Pendingapplicants" exact element={<Pendingapplicants props = {data}/>}/>
                <Route path="/Varifiedapplicants" exact element={<Varifiedapplicants props = {data}/>}/>
            </Routes>
            </BrowserRouter>
        </div>

    )
}

export {Admin}