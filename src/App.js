import React from 'react';
import './App.css';
import Person from "./Component/Person/Person"

class App extends React.Component {
  state = {
    person: [
      {name:"Prakhar",id:"0"},
      {name:"Razz",id:"1"},
      {name:"Rohit",id:"2"}
    ],
    toggle:true
  };
  changeName = (e) => {
    console.log("Name change event ")
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

  toggleFn = () => {
    this.setState( {
      toggle:!this.state.toggle
    }
    )
  }

  render() {

    if(this.state.toggle){
      var person = (
        this.state.person.map((item,index)=> {
          return <Person  name={item.name} changeMethod={this.changeName}  close={this.closeFn.bind(this,item.id)}  key={index} id={item.id} />
        })
      );
    }
    
    

    return (
      <div>
        <button onClick={this.toggleFn}>Toggle Btns</button>
        <div>
          {person}
        </div>
      </div>
    );

  }


  
}

export default App;
