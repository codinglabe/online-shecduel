import React, { Fragment } from 'react'
import Calender from '../../../image/calendar_write_32_hot.gif'
import customer from '../../../image/customers_star_32_hot.gif'
import exports from '../../../image/document_down_32_hot.gif'
import SignOut from '../../../image/admin_off_32_hot.gif'
import { Link } from "react-router-dom";
export default function header() {
  return (
    <Fragment>
        <a href="#" className="text-decoration-none me-5 pe-4">
            <img src={Calender} alt="calender"/> <span className="calender-text">Add / Edit / Events</span>
        </a>

        <Link to="/classreservation" className="text-decoration-none  me-ld-5 pe-lg-4 me-3">
            <img src={customer} alt="calender"/> <span className="calender-text">Account / User Setup</span>
        </Link>                
        <a href="#" className="text-decoration-none me-5 pe-5">
            <img src={exports} alt="calender"/> <span className="calender-text">Export Data</span>
        </a>
        <Link to="/" className="text-decoration-none me-5 ms-3">
            <img src={SignOut} alt="calender"/> <span className="calender-text">Sign Out</span>
        </Link>               

                        
    </Fragment>
  )
}
