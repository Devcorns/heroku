import React from "react";

import {Card, Form, Col, Row, Button} from "react-bootstrap";
import './SearchEmployee.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser,faCoffee,faStar, faStarHalf, faStarHalfAlt, faPlus, faPlusCircle  } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
library.add(faUser,faCoffee,faStar,faStarHalf,faStarHalfAlt,faPlus, faPlusCircle );

class AddEmployee extends React.Component {
    state = {
        token: localStorage.getItem("edb-token"),
        experienceInYear : [],
        profileData : [
            {title:"Accountant",id:1},
            {title:"Business analyst",id:2},
            {title:"Data analyst",id:3},
            {title:"CEO",id:4},
            {title:"Content developer",id:5},
            {title:"Product manager",id:6},
            {title:"Marketing manager",id:7},
            {title:"Software developer",id:8},
            {title:"Customer relationship manager",id:9},
            {title:"Solutions architect",id:10},
            {title:"Machine learning engineer",id:11},
            {title:"Digital marketer",id:12},
            {title:"Data security analyst",id:13},
            {title:"Business intelligence analyst",id:14},
            {title:"Teacher",id:15},
            {title:"Social media manager",id:16},
            {title:"Project manager",id:17},
            {title:"Financial management consultant",id:18},
            {title:"Sales representative",id:19},
            {title:"IT",id:20},
            {title:"Operation manager",id:21},
            {title:"HR manager",id:22},
            {title:"Insurance advisor",id:23},
            {title:"Doctor",id:24},
            {title:"Lawyer",id:25}
        ],
        empReview:1,
        empProfile:1,
        firstName:"",
        secondName:"",
        totalExp:1,
        mobile:"",
        email:""
    }

    addEmp = () => {


        // Axios.post("http://localhost:3000/api/user/register-via-behalf",{token:this.state.token},{ headers: {
        //     'Content-Type': 'application/json'
        //     }}).then(function(res,err) {
        //     console.log(res,err);
        // })
        console.log(this.state)
    }

    changeHandleInput = (e) => {
        console.log(e.target.name,e.target.value)
        this.setState({[e.target.name]: e.target.value});
    }

    changeHandleSelect = e => {
        console.log(e.target.name,e.target.value)
        this.setState({[e.target.name]: e.target.value});
    }
    

    render() {
        
        var profiles = this.state.profileData.map(function(item,index) {
            return <option key={index} value={index+1}>{item.title}</option>;
        }) 

        var exp = this.state.profileData.map((item,index)=>{
            return <option key={index} value={index+1}>{index+1}</option>
        })
        
        var empReview = this.state.profileData.map((item,index)=>{
            if(index>=5) {
                return false;
            }
        return <option id={index+1} key={index+1}>{index+1}</option>
        })

        return(
                    <Card className="mb-4">
                        <Card.Header>Add Employee Profile</Card.Header>
                        <Card.Body className="pb-0">
                            <Form>
                                <Row>
                                    <Col sm={6}>
                                        <Form.Group  controlId="formBasicEmail">
                                            <Form.Label className="font-weight-semibold">First Name</Form.Label>
                                            <Form.Control name="firstName" onChange={this.changeHandleInput} type="text" placeholder="Mark" />
                                        </Form.Group>   
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="formBasicPassword" className="mb-4">
                                            <Form.Label className="font-weight-semibold">Last Name</Form.Label>
                                            <Form.Control name="secondName" type="text" placeholder="Zuckerberg" onChange={this.changeHandleInput} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <Form.Group  controlId="formBasicEmail">
                                            <Form.Label className="font-weight-semibold">Profile</Form.Label>
                                            <Form.Control name="empProfile" as="select" custom onChange={this.changeHandleSelect}>
                                                {profiles}
                                            </Form.Control>
                                        </Form.Group>   
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group  controlId="formBasicEmail" className="mb-4">
                                            <Form.Label className="font-weight-semibold">Experience</Form.Label>
                                            <Form.Control name="totalExp" as="select" onChange={this.changeHandleSelect} custom>
                                                {exp}
                                            </Form.Control>
                                        </Form.Group>   
                                    </Col>
                                </Row>
                                <Row>
                                <Col sm={6}>
                                        <Form.Group  className="mb-4">
                                            <Form.Label className="font-weight-semibold">Company Name</Form.Label>
                                            <Form.Control name="Company Name" onChange={this.changeHandleInput}  type="text" placeholder="Devcorns Innvovation" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group  className="mb-4">
                                            <Form.Label className="font-weight-semibold">Employee Review </Form.Label>
                                            <Form.Control name="empReview" onChange={this.changeHandleSelect} as="select" custom>
                                                {empReview}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                <Col sm={6}>
                                        <Form.Group  className="mb-4">
                                            <Form.Label className="font-weight-semibold">Mobile</Form.Label>
                                            <Form.Control name="mobile" onChange={this.changeHandleInput} type="text" placeholder="+XX-9876543210" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group  className="mb-4">
                                            <Form.Label className="font-weight-semibold">Email</Form.Label>
                                            <Form.Control  name="email" onChange={this.changeHandleInput} type="text" placeholder="mark.zuckerberg@gmail.com" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="text-right">
                            <Button variant="success" onClick={this.addEmp} >Add Employee</Button>
                        </Card.Footer>
                    </Card>
                
        )
    }
}

export default AddEmployee;