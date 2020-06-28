import React from "react";
import {Card, Form, Row, Col, InputGroup, Button, FormControl } from "react-bootstrap";

class Search extends React.Component {
    
    constructor(props){
        super(props);
    }


    render() {


        return(
            <form onSubmit={this.props.search}>
                <Card className="mb-4">
                    <Card.Body className="pb-10 mt-10">
                        <Row>
                            <Col md={6}>
                                <Form.Group className="field" >
                                    <Form.Control type="text" placeholder="" name="fullEmpName" onChange={this.props.searchHandle}   />
                                    <label className="font-weight-semibold moving-fn">Employee Name</label>
                                </Form.Group >  
                            </Col>
                            <Col md={6}>
                                <Form.Group className="field">
                                    <Form.Control   type="text" placeholder="" name="companyName" onChange={this.props.searchHandle} />
                                    <label className="moving-fn font-weight-semibold">Company Name</label>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                
                                <Form.Group className="field">
                                    <Form.Control  type="text" placeholder="" name="mobile" onChange={this.props.searchHandle} />
                                    <label className="moving-fn font-weight-semibold">Phone No</label>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="field">
                                    <Form.Control  type="text" placeholder="" name="email" onChange={this.props.searchHandle} />
                                    <label className="moving-fn font-weight-semibold">Email</label>
                                </Form.Group>
                            </Col>
                        </Row> 
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col className="text-right">
                                <Button variant="primary" type="submit">Search</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </form>
        )
    }

}

export default Search;
