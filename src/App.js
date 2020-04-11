import React from 'react';
import './App.css';
import Person from "./Component/Person/Person"

class App extends React.Component {
  changeName = () => {
    console.log("change name");
  }
  closeFn = (event) => {
    console.log(event.target.closest(".card").remove());
  }
  render() {
    return (
      <div>
        <Person name="Prakhar" clickMethod={this.changeName} close={this.closeFn} />
        <Person name="Razz" clickMethod={this.changeName} close={this.closeFn} />
        <Person name="Rohit" clickMethod={this.changeName} close={this.closeFn} />
      </div>
    );
  }


  
}

export default App;
