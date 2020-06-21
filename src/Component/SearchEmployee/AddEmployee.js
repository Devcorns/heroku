import React from "react";

import CountryCodes  from './../Data/CountryCodes.json';
import ProfileDatas  from './../Data/ProfileData.json';
import SimpleReactValidator from 'simple-react-validator';

import {Card, Form, Col, Row, Button} from "react-bootstrap";
import Dropzone from "./../UI/Dropzone/Dropzone"

import 'react-dropzone-uploader/dist/styles.css'




import './SearchEmployee.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser,faCoffee,faStar, faStarHalf, faStarHalfAlt, faPlus, faPlusCircle  } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
library.add(faUser,faCoffee,faStar,faStarHalf,faStarHalfAlt,faPlus, faPlusCircle );



class AddEmployee extends React.Component {

    
 
    

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({autoForceUpdate: this});
        this.onDrop = this.onDrop.bind(this);
    }

    componentWillMount() {
        this.validator = new SimpleReactValidator({autoForceUpdate: this});
    }

    
    state = {
        token: localStorage.getItem("edb-token"),
        
        profileData : [
            ...ProfileDatas
        ],
        countryCodesFromJson: [...CountryCodes],
        empReview:1,
        empProfile:1,
        firstName:"",
        secondName:"",
        totalExp:1,
        mobile:"",
        email:"",
        countryCode:"india",
        companyName:"",
        userimg:"",
        experienceInYear : [],
    }

    onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
    }

    // addEmp = () => {


    //     Axios.post("http://localhost:3000/api/user/register-via-behalf",{data:this.state},{ headers: {
    //         'Content-Type': 'application/json'
    //         }}).then(function(res,err) {
    //         console.log(res,err);
    //     })
    //     // console.log({...this.state})
    // }

    changeHandleInput = (e) => {
        console.log(e.target.name,e.target.value)
        this.setState({[e.target.name]: e.target.value});
    }

    changeHandleSelect = e => {
        console.log(e.target.name,e.target.value)
        this.setState({[e.target.name]: e.target.value});
    }
    
    handleFileUpload = img => {
        
        var imgToBase64data;
        var reader = new FileReader();
        reader.readAsDataURL(img); 
        reader.onloadend = () => {
            imgToBase64data = reader.result;                
            console.log(imgToBase64data);
            this.setState({
                userimg:imgToBase64data
            })
            return;
        }

       
        
        
        
        // const fd = new FormData();
        // fd.append("image",this.state.img.name);
        // console.log(fd);

        
    }

    // getMobileValidity = () => {
    //     alert();
    // }

    submitForm = e => {
        if (this.validator.allValid()) {
            Axios.post("http://localhost:3000/api/user/register-via-behalf",{formData:this.state},{ headers: {
                'Content-Type': 'application/json'
                }}).then(function(res,err) {
                console.log(res,err);
            });
        } else {
            this.validator.showMessages();
        }
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

        var ctryCode = this.state.countryCodesFromJson.map((item,index)=>{
        return <option  key={index} value={item.code}>{item.name}</option>
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
                                            <Form.Control name="firstName" value={this.state.firstName} onChange={this.changeHandleInput} type="text" placeholder="Mark" />
                                            <span className="text-danger">{this.validator.message('firstName', this.state.firstName, 'required|min:4|alpha')}</span>
                                        </Form.Group>   
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="formBasicPassword" className="mb-4">
                                            <Form.Label className="font-weight-semibold">Last Name</Form.Label>
                                            <Form.Control name="secondName" type="text" placeholder="Zuckerberg" onChange={this.changeHandleInput} />
                                            <span className="text-danger">{this.validator.message('secondName', this.state.secondName, 'required|min:4|alpha')}</span>
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
                                            <Form.Control name="companyName" onChange={this.changeHandleInput} value={this.state.companyName}  type="text" placeholder="Devcorns Innvovation" />
                                            <span className="text-danger">{this.validator.message('companyName', this.state.companyName, 'required|min:4')}</span>
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
                                <Col sm={2}>
                                        <Form.Group  className="mb-4">
                                            <Form.Label className="font-weight-semibold">Country</Form.Label>
                                            <Form.Control name="countryCode" as="select" onChange={this.changeHandleSelect} custom>
                                                {ctryCode}
                                            </Form.Control>
                                        </Form.Group>
                                </Col>
                                    <Col sm={4}>
                                        <Form.Group  className="mb-4">
                                            <Form.Label className="font-weight-semibold">Mobile</Form.Label>
                                            <Form.Control name="mobile" onChange={this.changeHandleInput} type="text" placeholder="+XX-9876543210" />
                                            <span className="text-danger">{this.validator.message('mobile', this.state.mobile, 'required|integer|min:10|max:21}')}</span>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group  className="mb-4">
                                            <Form.Label className="font-weight-semibold">Email</Form.Label>
                                            <Form.Control  name="email" onChange={this.changeHandleInput} type="text" placeholder="mark.zuckerberg@gmail.com" />
                                            <span className="text-danger">{this.validator.message('email', this.state.email, 'required|email')}</span>
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <Form.Group  className="mb-4">
                                            <Form.Label className="font-weight-semibold">User Image</Form.Label>
                                            
                                            <Dropzone name="userimg" uploadFile= {this.handleFileUpload} />
                                            {/* <span className="text-danger">{this.validator.message('user image', this.state.userimg, 'required')}</span> */}
                                        </Form.Group>
                                        
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="text-right">
                            <Button variant="success" onClick={this.submitForm} >Add Employee</Button>
                        </Card.Footer>
                    </Card>
                
        )
    }
}

export default AddEmployee;