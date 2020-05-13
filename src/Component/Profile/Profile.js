import React from "react";
import axios from "axios";
import { Form,Button,Container,Row,Card,Col,InputGroup,FormControl } from "react-bootstrap";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        //this.handleInputChange = this.handleInputChange.bind(this)
    }
    
    state = {
        authStr : localStorage.getItem("edb-token"),
        getApiResponse:{},
        userData: {},
        validateRegx : {
            username:""
        }

    }

    handleInputChange = (e) => {
        if(e.target.value.length >= 8) {
            e.preventDefault();
            var checkSpecialRgx = () => {
                return new RegExp('^[a-zA-Z0-9]{8,20}$').test(e.target.value);
            }
            var getRgxOk = checkSpecialRgx();
            if(getRgxOk) {
                this.setState({
                    validateRegx : {
                        ...this.state.validateRegx,
                        username:"Username "+ e.target.value +" is Valid"
                    }
                })
                this.setState({
                    userData: {
                        ...this.state.userData,
                        [e.target.name]: e.target.value
                    }
                });
            } else {
                this.setState({
                    validateRegx : {
                        ...this.state.validateRegx,
                        username:"Try another USERNAME"
                    }
                })
            }
        } else {
            this.setState({
                validateRegx : {
                    ...this.state.validateRegx,
                    username:""
                }
            })
        }

       
        console.log(this.state.userData)
    }

    componentDidMount() {
        axios.get("http://localhost:3000/api/auth/getUser", { headers: { 'x-access-token': this.state.authStr } })
        .then(response=>{
            this.setState({
                getApiResponse:response.data
            })
            console.log(response.data)
        })
        .catch((error) => {
            console.log('error ' + error);
         });
    }

    render() {
        console.log(this.state.getApiResponse);
    return(
        <main>
            <Container>
                <Card className="mb-4 d-none">
                    <Card.Header as="h5">User Details</Card.Header>
                    <Card.Body>
                            <Form>
                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label className="font-weight-bold" column sm="12">
                                        RefId
                                    </Form.Label>
                                    <Col sm="12">
                                        <p className="custom-input">{this.state.getApiResponse._id}</p>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label className="font-weight-bold" column sm="12">
                                        Email
                                    </Form.Label>
                                    <Col sm="12">
                                        <p className="custom-input">{this.state.getApiResponse.email}</p> 
                                    </Col>
                                </Form.Group>
                            </Form>
                        
                    </Card.Body>
                </Card>
                {/* <Card className="mb-4">
                    <Card.Header as="h5">Edit Details</Card.Header>
                    <Card.Body>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label className="font-weight-bold" column sm="12">
                                Set Username
                            </Form.Label>
                            <Col sm="12">
                                <InputGroup className="mb-3">
                                    <FormControl
                                    name="setUsername"
                                    onChange={this.handleInputChange}
                                    />
                                    <InputGroup.Append>
                                    <Button variant="outline-secondary">Button</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                                <p><small>{this.state.validateRegx.username}</small></p>
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card> */}
                <Card>
                    <Card.Header as="h5">Edit Details</Card.Header>
                    <Card.Body>
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
                            
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>   
        </main> 
    )
    }
}

export default Profile;