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
                                    <a className="btn btn-primary text-white" href="#">Add Company to your profile</a> <a className="btn btn-success text-white">Give Employee Review</a>
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
                                    <a className="btn btn-primary text-white" href="#">Add Company to your profile</a> <a className="btn btn-success text-white">Give Employee Review</a>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4">
                        
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
                    <Card className="mb-4 d-none">
                        <Card.Body>
                            <Form.Group controlId="formBasicEmail">
                                {['radio'].map((type) => (
                                    <div  key={`custom-inline-${type}`} className="mb-3 text-center">
                                        <Form.Check
                                            custom
                                            inline
                                            label="Anynomous"
                                            type={type}
                                            name="usertype"
                                            id="anynomous"
                                        />
                                        <Form.Check
                                            custom
                                            inline
                                            label="Real"
                                            type={type}
                                            name="usertype"
                                            id="real"
                                        />
                                    </div>))}
                            </Form.Group>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4">
                        <Card.Body>
                            <Form.Group controlId="formBasicEmail">
                                <h6>Search Employee</h6>
                                <Form.Control type="text" placeholder="Prakhar Mathur" name="company-search" />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4 ">
                        <Card.Body className="pb-0">
                        <Row>
                            <Col sm={{span:6}} md={{ span: 4 }}>
                                <Card className="mb-4" >
                                    <Card.Body>
                                        
                                        <Card.Title><a href="#" className="text-primary text-decoration-none">Santosh Nayak</a></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Manager</Card.Subtitle>
                                        <Card.Text className="review-stars red">
                                            <FontAwesomeIcon icon="star" />
                                        </Card.Text>
                                        <Card.Link href="#">Reviews</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={{span:6}} md={{ span: 4 }}>
                                <Card className="mb-4" >
                                    <Card.Body>
                                        
                                        <Card.Title><a href="#" className="text-primary text-decoration-none">Prakhar Mathur</a></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">UI Developer</Card.Subtitle>
                                        <Card.Text className="review-stars">
                                            <FontAwesomeIcon icon="star" />
                                            <FontAwesomeIcon icon="star" />
                                            <FontAwesomeIcon icon="star" />
                                            <FontAwesomeIcon icon="star" />
                                            <FontAwesomeIcon icon="star" />
                                        </Card.Text>
                                        <Card.Link href="#">Reviews</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={{span:6}} md={{ span: 4 }}>
                                <Card className="mb-4" >
                                    <Card.Body>
                                        <Card.Title><a href="#" className="text-primary text-decoration-none">Raj Singh</a></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Android Developer</Card.Subtitle>
                                        <Card.Text className="review-stars">
                                            <FontAwesomeIcon icon="star" />
                                            <FontAwesomeIcon icon="star" />
                                            <FontAwesomeIcon icon="star" />
                                            <FontAwesomeIcon icon="star" />
                                            <FontAwesomeIcon icon="star" />
                                        </Card.Text>
                                        <Card.Link href="#">Reviews</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={{span:6}} md={{ span: 4 }}>
                                <Card className="mb-4" >
                                    <Card.Body>
                                        <Card.Title><a href="#" className="text-primary text-decoration-none">Siddartha Sharma</a></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">UI Developer</Card.Subtitle>
                                        <Card.Text className="review-stars">
                                            <FontAwesomeIcon icon="star" />
                                            <FontAwesomeIcon icon="star" />
                                            <FontAwesomeIcon icon="star" />
                                            <FontAwesomeIcon icon="star" />
                                            <FontAwesomeIcon icon="star" />
                                        </Card.Text>
                                        <Card.Link href="#">Reviews</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        </Card.Body>
                        
                    </Card>
                    <Card className="mb-4">
                        <Row>
                            <Col>
                                <div className="add-new-company">
                                    <a >
                                        + 
                                    </a>
                                    <span className="desc">Add Employee Profile</span>
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