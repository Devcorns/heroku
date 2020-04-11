import React from 'react';
import './App.css';
import Person from "./Component/Person/Person"

class App extends React.Component {

  

  state = {
    person: [
      {name:"Prakhar",id:"0"},
      {name:"Razz",id:"1"},
      {name:"Rohit",id:"2"}
    ]
  };



  changeName = () => {
    console.log("change name");
  }
  closeFn = (eventId,event) => {
    console.log("This is event id",eventId,event)
    this.state.person.map((item,index)=>{
      if(item.id == eventId) {
       let arr = this.state.person;
        arr.splice(index,1);
        console.log( arr );
        this.setState(
          {
            person: arr
          }
        )
      }
    })
  }
  render() {
    let person = (
      this.state.person.map((item,index)=> {
        return <Person  name={item.name} clickMethod={this.changeName} close={this.closeFn.bind(this,item.id)}  key={index} id={item.id} />
      })
    );
    return (
      <div>
        {person}
      </div>
    );

  }


  
}

export default App;
