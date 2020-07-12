import React from "react";

import SearchBox from "./Search/Search";

import ProfileDatas from "./../Data/ProfileData.json";

import {Container, Card, Form, Col, Row, Image} from "react-bootstrap";
import AddEmployee from "./AddEmployee"

import Axios from "axios";

import './SearchEmployee.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser,faCoffee,faStar, faStarHalf, faStarHalfAlt, faPlus, faPlusCircle  } from "@fortawesome/free-solid-svg-icons";
library.add(faUser,faCoffee,faStar,faStarHalf,faStarHalfAlt,faPlus, faPlusCircle );

class SearchEmployee extends React.Component {

    state = {
        users: [],
        profileData:[...ProfileDatas],
        searchObjet: {},
        alertMsg:"",
           
    }

    getToken = () => {
        return localStorage.getItem("edb-token");
    }

    componentDidMount = () => {
        
        Axios.get("http://localhost:3000/api/user/get-users").then((res,err)=>{
            
            if(err) throw err;

            if(Array.isArray(res.data)) {
                this.setState(
                    {
                        users:[...res.data]
                    }
                );
            } 
           //console.log(this.state,"This is user id",this.state.users[0]._id)
        })

    }

    isToggledMoreOptions = (e) => {
        
        this.setState({
            isToggled:!this.state.isToggled,
            
        })
        

    }

    searchHandle = (e) => {
        this.setState({
            searchObjet: {
                ...this.state.searchObjet,
                [e.target.name]:  e.target.value
            }  
        })
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.searchObjet)
        Axios.get("http://localhost:3000/api/user/get-users",{
            params: {
                ...this.state.searchObjet
            }
        }).then(users=>{
            if(users.data.length) {
                this.setState({
                users:users.data
                })
            } else {
                this.setState({
                    users:[],
                    alertMsg: users.data.message
                })
            }
        })
        
    }

    reviewsFn = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3000/api/user/reviews",{"userId":e.target.name,"token":this.getToken()},{ headers: {
        'Content-Type': 'application/json'
        }}).then(function(res,err) {
            console.log(res,err);
        });
    }

 


    

    render() {
        return(
            <main>
                <Container>
                    <SearchBox search={this.handleSearchSubmit} searchHandle={this.searchHandle}  />

                    <Row>
                        {
                            this.state.users.length>0?  
                            this.state.users.map((item,index)=>{
                                return (
                                    <Col sm={{span:6}} md={{ span: 4 }} key={index}>
                                    <Card className="mb-4"  >
                                         <div className="img-container">
                                            <Card.Img  src={item.img} className="user-img"  />
                                        </div>
                                        <Card.Body className="users">
                                            
                                            <Card.Title><a href="#" className="text-primary text-decoration-none text-capitalize">{item.firstName} {item.lastName}</a></Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted text-capitalize">
                                                     {item.Profile}
                                            </Card.Subtitle>
                                            
                                            <Card.Text className={item.rating>2?'review-stars':'review-stars red'}  >
                                                {[...Array(item.rating)].map((x, i) =>
                                                    <FontAwesomeIcon icon="star" key={i}   />
                                                )}
                                            </Card.Text>
                                            <Card.Link name={item._id}  onClick={this.reviewsFn} >Reviews</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                )
                            }) : <Col  >
                                    <Card className="mb-4" >
                                    
                                        <Card.Body className="users"> 
                                        {this.state.alertMsg}
                                        </Card.Body>
                                    </Card>
                                </Col>
                        }
                        
                        {/* {
                            
                        } */}
                    </Row>
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
                    <AddEmployee />
                </Container>
            </main>
        )
    }
}

export default SearchEmployee;