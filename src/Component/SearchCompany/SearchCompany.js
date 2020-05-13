import React from "react";
import {Container, Card, Form, Col, Row} from "react-bootstrap";
import './SearchCompany.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser,faCoffee,faStar, faStarHalf, faStarHalfAlt, faPlus, faPlusCircle  } from "@fortawesome/free-solid-svg-icons";
library.add(faUser,faCoffee,faStar,faStarHalf,faStarHalfAlt,faPlus, faPlusCircle );

class SearchCompany  extends React.Component {

    render() {
        return(
            <main>
                <Container>
                    <Card className="mb-4">
                        <Card.Body>
                            <Form.Group controlId="formBasicEmail">
                                <h6>Search Company</h6>
                                <Form.Control type="text" placeholder="Devcorns Innovation" name="company-search" />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4">
                        <Card.Body>
                            <Row>
                                <Col sm={3}>
                                    <img src={process.env.PUBLIC_URL + 'assets/img/company-profile.jpg'} alt="Company Profile" className="img-fluid"  thumbnail="true"  />
                                </Col>
                                <Col sm={9}>
                                    <Card.Title>Devcorns Innovation | <small><strong>Indian</strong></small></Card.Title>
                                    <Card.Text className="review-stars">
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                    </Card.Text>
                                    <Card.Text>Employee Strength: 1300</Card.Text>
                                    <a className="btn btn-primary text-white">Add Company to your profile</a>
                                </Col> 
                            </Row>
                            <div className="line"></div>
                            <Row>
                                <Col sm={3}>
                                    <img src={process.env.PUBLIC_URL + 'assets/img/company-profile.jpg'} alt="Company Profile" className="img-fluid"  thumbnail="true"  />
                                </Col>
                                <Col sm={9}>
                                    <Card.Title>IS Software Solution | <small><strong>Indian</strong></small></Card.Title>
                                    <Card.Text className="review-stars">
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                    </Card.Text>
                                    <Card.Text>Employee Strength: 1300</Card.Text>
                                    <a className="btn btn-primary text-white">Add Company to your profile</a>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        
                            <Row>
                                <Col>
                                    <div className="add-new-company">
                                        <a >
                                            + 
                                        </a>
                                        <span className="desc">Add Your Company</span>
                                    </div>
                                    
                                    
                                </Col>
                                
                            </Row>
                        
                    </Card>
                </Container>
            </main>
        )
    }

}

export default SearchCompany;