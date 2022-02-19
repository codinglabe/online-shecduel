import React, {Fragment}from "react";
import {Col, Container, Row} from "react-bootstrap";
import Calender from '../../../image/calendar_write_32_hot.gif'
import customer from '../../../image/customers_star_32_hot.gif'
import exports from '../../../image/document_down_32_hot.gif'
import SignOut from '../../../image/admin_off_32_hot.gif'
export default function Home(){
    return(
        <Fragment>
            <Container>
                <Row className="justify-content-center">
                    <Col md={7} className="mt-2">
                        <a href="#" className="text-decoration-none me-5 pe-4">
                            <img src={Calender} alt="calender"/> <span className="calender-text">Add / Edit / Events</span>
                        </a>

                        <a href="#" className="text-decoration-none me-5 pe-4">
                            <img src={customer} alt="calender"/> <span className="calender-text">Account / User Setup</span>
                        </a>

                        <a href="#" className="text-decoration-none me-5 pe-5">
                            <img src={exports} alt="calender"/> <span className="calender-text">Export Data</span>
                        </a>

                        <a href="#" className="text-decoration-none me-5 ms-3">
                            <img src={SignOut} alt="calender"/> <span className="calender-text">Sign Out</span>
                        </a>


                        <p className="text-center mt-3 fw-bold">WELCOME TO ADMIN MENU</p>
                        <div className="select text-center">
                            <select className="w-25" name="event" id="event">
                                <option>EVENTS Modified in the last 10 days</option>
                                <option>EVENTS Modified in the last 30 days</option>
                                <option>EVENTS Modified in the last 30 days</option>
                                <option>EVENTS Modified in the last 30 days</option>
                                <option>EVENTS Modified in the last 30 days</option>
                            </select>
                        </div>

                        <div className="userTable text-center">
                            <table className="table table-bordered">
                                <thead className="bg-primary">
                                <tr>
                                    <th>Modified By</th>
                                    <th>Modified Time</th>
                                    <th>Resource</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Notes</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </Col>

                </Row>
            </Container>
        </Fragment>
    )
}
