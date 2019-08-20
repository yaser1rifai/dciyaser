import React, { Component } from 'react'
import Child from "./Child";
import MyComponent from './Components/MyComponent';
import Car from "./Car";

 
export default class App extends Component {
  state={
    name:'yaser old',
    age:25,
  }
  
  Change=()=>{
    this.setState({name:'Yaser WALID RIFAI',age:45});

    }
    
  
  
  render() {
    return (
      <div className="App">
          <Child />
          <button onClick={this.Change}>change state </button>
          <P>{this.state.name}</P>
      </div>

    )
  }
}
/*export default   App;  */
