import React, {Fragment}from "react";
import {Col, Container, Row} from "react-bootstrap";
import Headers from "../header/header";
export default function Home(){
    return(
        <Fragment>
            <Container>
                <Row className="justify-content-center">
                    <Col md={7} className="mt-2">
                        <Headers/>
                        <p className="text-center mt-3 fw-bold">WELCOME TO ADMIN MENU</p>
                        <div className="select text-center">
                            <select className="w-50" name="event" id="event">
                                <option>EVENTS Modified in the last 10 days</option>
                                <option>EVENTS Modified in the last 30 days</option>
                                <option>EVENTS Modified in the last 30 days</option>
                                <option>EVENTS Modified in the last 30 days</option>
                                <option>EVENTS Modified in the last 30 days</option>
                            </select>
                        </div>

                        <div className="userTable text-center mt-4">
                            <table className="table table-bordered">
                                <thead className="bg-color">
                                <tr className="table-title p-0 m-0">
                                    <th className="table-title p-0 m-0">Modified By</th>
                                    <th className="table-title p-0 m-0">Modified Time</th>
                                    <th className="table-title p-0 m-0">Resource</th>
                                    <th className="table-title p-0 m-0">Start Date</th>
                                    <th className="table-title p-0 m-0">End Date</th>
                                    <th className="table-title p-0 m-0">Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr className="list">
                                        <td>Doe</td>
                                        <td>2/19/2022 2:12:20 AM</td>
                                        <td>Vrisha 2</td>
                                        <td>2/20/2022 3:00:00 AM</td>
                                        <td>2/28/2022 6:00:00 AM</td>
                                        <td>red</td>
                                    </tr>

                                    <tr className="list">
                                        <td>Doe</td>
                                        <td>2/19/2022 2:12:20 AM</td>
                                        <td>Vrisha 2</td>
                                        <td>2/20/2022 3:00:00 AM</td>
                                        <td>2/28/2022 6:00:00 AM</td>
                                        <td>red</td>
                                    </tr>

                                    <tr className="list">
                                        <td>Doe</td>
                                        <td>2/19/2022 2:12:20 AM</td>
                                        <td>Vrisha 2</td>
                                        <td>2/20/2022 3:00:00 AM</td>
                                        <td>2/28/2022 6:00:00 AM</td>
                                        <td>red</td>
                                    </tr>
                                    <tr className="list">
                                        <td>Doe</td>
                                        <td>2/19/2022 2:12:20 AM</td>
                                        <td>Vrisha 2</td>
                                        <td>2/20/2022 3:00:00 AM</td>
                                        <td>2/28/2022 6:00:00 AM</td>
                                        <td>red</td>
                                    </tr>
                                    <tr className="list">
                                        <td>Doe</td>
                                        <td>2/19/2022 2:12:20 AM</td>
                                        <td>Vrisha 2</td>
                                        <td>2/20/2022 3:00:00 AM</td>
                                        <td>2/28/2022 6:00:00 AM</td>
                                        <td>red</td>
                                    </tr>
                                    <tr className="list">
                                        <td>Doe</td>
                                        <td>2/19/2022 2:12:20 AM</td>
                                        <td>Vrisha 2</td>
                                        <td>2/20/2022 3:00:00 AM</td>
                                        <td>2/28/2022 6:00:00 AM</td>
                                        <td>red</td>
                                    </tr>
                                    <tr className="list p-0 m-0">
                                        <td colSpan="6" className="p-1 m-1" >
                                            <span>&lt;Previous Page</span>&nbsp;<span>Next Page&gt;</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>

                </Row>
            </Container>
        </Fragment>
    )
}
