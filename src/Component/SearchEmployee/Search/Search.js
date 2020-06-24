import React from "react";
import {Card, Form} from "react-bootstrap";

class Search extends React.Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Card className="mb-4">
                <Card.Body>
                    <Form.Group controlId="formBasicEmail">
                        <h6>Search Employee</h6>
                        <Form.Control type="text" placeholder="Search here..." name="company-search" onChange={this.props.search} />
                    </Form.Group>
                </Card.Body>
            </Card>
        )
    }

}

export default Search;
