import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  /* constructor(props) {
    super(props); */
    state = {
      name: "YASER",
     age: 22,
      
    };
  /* } */
  changeName = () => {
    this.setState({name: "yaser rifai", age:44,});
  }
  render() {
    return (
      <div>
        <h1>My Name is  {this.state.name  }</h1>
        <h1>My Age is  {this.state.age  }</h1>
        
        <button
          type="button"
          onClick={this.changeName}
        >Change name</button>
      </div>
    );
  }
}
 
 
 
 
 
 
 



export default App;
