import React, { Fragment } from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import door from '../../../image/door_32_hot.gif'
import notepad from '../../../image/notepad_32_hot.gif'
import SignOut from '../../../image/admin_off_32_hot.gif'
import House from '../../../image/house_32_hot.gif'
import users from '../../../image/customers_32_hot.gif'
import notofication from '../../../image/mail_config_32_hot.gif'

import { Link } from "react-router-dom";
export default function userSetup() {
    
  return (
    <Fragment>
        <Container>
            <Row className="justify-content-center">
                <Col md={7} className="mt-2">        
                    <div className="float-end">
                    <Link to="/a_welcome" className="text-decoration-none me-4">
                    <img src={House} alt="calender"/> <span className="calender-text">Home</span>
                    </Link>
                    <Link to="/" className="text-decoration-none me-5 ms-3">
                        <img src={SignOut} alt="calender"/> <span className="calender-text">Sign Out</span>
                    </Link>
                    </div>
                    
                </Col>
                <p className="text-center mt-3 demo-company mb-1">ACCOUNT SETUP AND USER PREFERENCES</p>
                <p className="text-center demo-company mt-0 pt-0">Demo Company</p>

                <div className="box">
                    <table className="mt-4">
                        <tbody >
                            <tr>
                                <td className="w-50">
                                    <Link to="">
                                        <img src={door} alt="image" /><span className="calender-text">Add / Edit Classes</span>
                                    </Link>
                                </td>
                                <td className="w-25">
                                    <Link to="">
                                        <img src={notepad} alt="image" /><span className="calender-text"> Account Setup</span>
                                    </Link>
                                </td>
                                <td className="float-end">
                                    <Link to="">
                                        <img src={users} alt="image" /><span className="calender-text">Users</span>
                                    </Link>
                                </td>
                                
                            </tr> 
                            <tr className="mt-4">
                                
                                <td>
                                    <Link to="">
                                        <img src={notofication} alt="image" /><span className="calender-text">Notification</span>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Row>
        </Container>
    </Fragment>
  )
}
