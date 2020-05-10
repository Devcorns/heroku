import React, { useEffect, useState }  from "react";
import {} from './Person.css'

var Person = (props) => {

    let counts = 1;
    let [count, setCount] = useState(0);
    
    // useEffect(()=>{
    //     console.log("Use Effect render count... Person.js");
    // },[count])

    useEffect(()=>{
    
    
    },[count])

 
    
    return (
        <div className="card" id={props.id}>
            <h2>My Name is {props.name} </h2>
            <input onChange={props.changeMethod} type="text" />
            <div>This is count {count}</div>
            <button onClick={()=>{
                setCount(count+1)
            }} >Increase Count</button>
            <span className="close" onClick={props.close.bind(this)}>Close</span>
        </div>
    );    
}

export default Person;