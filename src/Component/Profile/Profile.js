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
                <Card className="mb-4">
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
                <Card>
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
                </Card>
            </Container>   
        </main> 
    )
    }
}

export default Profile;