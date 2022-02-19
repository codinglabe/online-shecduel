import {Fragment} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import LoginImgae from '../../../image/login.jpg'
import {Link} from "react-router-dom";
function Login(){
    return(
        <Fragment>
            <Container>
                <Form>
                    <Row className="justify-content-center">
                        <Col md={4} className="text-center">
                            <img src={LoginImgae} alt="imgae"/>
                        </Col>
                        <Col md={4}>
                            <h4 className="mt-5 title ms-5 ps-5">Please Login</h4>
                            <table>
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td>Username</td>
                                    <td><input type="text" name="" id=""/></td>
                                </tr>
                                <tr><td></td>
                                    <td>Password</td>
                                    <td><input type="text" name="" id=""/></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><Link to="/a_welcome" className="submit" type="submit" name="" id="" value=''>Sign In!</Link></td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                        <p className="text-center powered">Powered by Scheduling-Online.com.</p>
                    </Row>
                </Form>
            </Container>
        </Fragment>
    )
}
export default Login;
