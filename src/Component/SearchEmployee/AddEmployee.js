import React from "react";

import {Card, Form, Col, Row, Button} from "react-bootstrap";
import './SearchEmployee.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser,faCoffee,faStar, faStarHalf, faStarHalfAlt, faPlus, faPlusCircle  } from "@fortawesome/free-solid-svg-icons";
library.add(faUser,faCoffee,faStar,faStarHalf,faStarHalfAlt,faPlus, faPlusCircle );

class AddEmployee extends React.Component {
    render() {
        return(
            
                    <Card className="mb-4">
                        <Card.Header>Add Employee Profile</Card.Header>
                        <Card.Body className="pb-0">
                            <Form>
                                <Row>
                                    <Col sm={6}>
                                        <Form.Group  controlId="formBasicEmail">
                                            <Form.Label className="font-weight-semibold">First Name</Form.Label>
                                            <Form.Control type="text" placeholder="Mark" />
                                        </Form.Group>   
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="formBasicPassword" className="mb-4">
                                            <Form.Label className="font-weight-semibold">Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Zuckerberg" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <Form.Group  controlId="formBasicEmail">
                                            <Form.Label className="font-weight-semibold">Profile</Form.Label>
                                            <Form.Control as="select" custom>
                                            <option>Accountant</option>
                                            <option>Business analyst</option>
                                            <option>Data analyst</option>
                                            <option>CEO</option>
                                            <option>Content developer</option>
                                            <option>Product manager</option>
                                            <option>Marketing manager</option>
                                            <option>Software developer</option>
                                            <option>Customer relationship manager</option>
                                            <option>Solutions architect</option>
                                            <option>Machine learning engineer</option>
                                            <option>Digital marketer</option>
                                            <option>Data security analyst</option>
                                            <option>Business intelligence analyst</option>
                                            <option>Teacher</option>
                                            <option>Social media manager</option>
                                            <option>Project manager</option>
                                            <option>Financial management consultant</option>
                                            <option>Sales representative</option>
                                            <option>IT</option>
                                            <option>Operation manager</option>
                                            <option>HR manager</option>
                                            <option>Insurance advisor</option>
                                            <option>Doctor</option>
                                            <option>Lawyer</option>
                                            </Form.Control>
                                        </Form.Group>   
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group  controlId="formBasicEmail" className="mb-4">
                                            <Form.Label className="font-weight-semibold">Experience</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>1 Years</option>
                                                <option>2 Years</option>
                                                <option>3 Years</option>
                                                <option>4 Years</option>
                                                <option>5 Years</option>
                                                <option>6 Years</option>
                                                <option>7 Years</option>
                                                <option>8 Years</option>
                                                <option>9 Years</option>
                                                <option>10 Years</option>
                                                <option>11 Years</option>
                                                <option>12 Years</option>
                                                <option>13 Years</option>
                                                <option>14 Years</option>
                                                <option>15 Years</option>
                                                <option>16 Years</option>
                                                <option>17 Years</option>
                                                <option>18 Years</option>
                                                <option>19 Years</option>
                                                <option>20 Years</option>
                                            </Form.Control>
                                        </Form.Group>   
                                    </Col>
                                </Row>
                                <Row>
                                <Col sm={6}>
                                        <Form.Group  className="mb-4">
                                            <Form.Label className="font-weight-semibold">Company Name</Form.Label>
                                            <Form.Control type="text" placeholder="Devcorns Innvovation" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group  className="mb-4">
                                            <Form.Label className="font-weight-semibold">Employee Review  </Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>1 </option>
                                                <option>2 </option>
                                                <option>3 </option>
                                                <option>4 </option>
                                                <option>5 </option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                <Col sm={6}>
                                        <Form.Group  className="mb-4">
                                            <Form.Label className="font-weight-semibold">Mobile</Form.Label>
                                            <Form.Control type="text" placeholder="+XX-9876543210" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group  className="mb-4">
                                            <Form.Label className="font-weight-semibold">Email</Form.Label>
                                            <Form.Control type="text" placeholder="mark.zuckerberg@gmail.com" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="text-right">
                            <Button variant="success" >Add Employee</Button>
                        </Card.Footer>
                    </Card>
                
        )
    }
}

export default AddEmployee;