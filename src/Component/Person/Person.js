import React  from "react";
import {} from './Person.css'

var Person = (props) => {
    console.log(props)
    
    return (
        <div className="card" id={props.id}>
            <h2>My Name is {props.name} </h2>
            <input onChange={props.clickMethod} type="text" />
            <span className="close" onClick={props.close}>Close</span>
        </div>
    );    
}

export default Person;