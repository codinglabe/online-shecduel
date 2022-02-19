import React, {Fragment} from "react";
import Login from "./components/login/LogIn";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/app.css"
import Home from "./components/home/Home";
import {BrowserRouter} from "react-router-dom";
import PageRouter from "./PageRouter/PageRouter";
export default function App(){
    return(
      <Fragment>
          <BrowserRouter>
              <PageRouter/>
          </BrowserRouter>
      </Fragment>
    );
}
