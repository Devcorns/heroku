import React from "react";
import axios from "axios";
import Toast from "../../Component/UI/Toast/Toast"

import { login} from './Login.css';
import { Form,Button,Container,Row,Card,Col } from "react-bootstrap";



class Login extends React.Component {

    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    
    state = {
        persons: [],
        header:this.setHeader,
        toast:false,
        reqData:{},
        userData:{}
      }


    headers = {
        'Content-Type': 'application/json'
    }

    handleInputChange = (e) => {
        this.setState({
            userData: {
                ...this.state.userData,
                [e.target.name]: e.target.value
            }
        });
    }
    

    submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/auth/register",this.state.userData,{ headers: {
            'Content-Type': 'application/json'
            }}).then((res,err)=>{
                if(res.data.status) {
                    this.setState({
                        reqData: res.data
                    })
                    // console.log("login-success",res.data);
                    localStorage.setItem("edb-token",res.data.token);
                } else {
                    this.setState({
                        reqData: res.data
                    })
                }
            })
    }

    showData = () => {
        console.log(this.state.userData);
    }
    

    render() {
        return(
            <main>
                <Container className="main-container">
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                            {/* <Toast data={this.state.reqData.message} /> */}
                            <Card className="login-card" >
                                <Card.Body>
                                    <Card.Title>Login</Card.Title>
                                    <Form onSubmit={this.submitHandler} className="login-form">
                                        
                                        <Form.Group >
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleInputChange.bind(this)}  />
                                        </Form.Group>
                                        <Form.Group >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleInputChange.bind(this)} />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                        Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* <button onClick={this.showData}>show user data</button> */}
                </Container>
            </main>
        )
    }
}

export default Login;