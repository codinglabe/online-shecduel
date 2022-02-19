import React,{Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Login from "../components/login/LogIn";
import Home from "../components/home/Home";

export default function PageRouter(){
    return(
        <Fragment>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/a_welcome" element={<Home/>}/>
            </Routes>
        </Fragment>
    )
}
