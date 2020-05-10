import React, {useState} from "react";
import {Toast} from "react-bootstrap";

const ToastComponent = (props) =>{
    const [show, setShow] = useState(false);
    console.log(props)
    return(
      <Toast  onClose={() => setShow(false)}   autohide>      
        <Toast.Body>{props.data.message}</Toast.Body>
      </Toast>
    )
} 

export default ToastComponent;
