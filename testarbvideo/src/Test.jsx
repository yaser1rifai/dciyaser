import React, { Component } from 'react'

export default class test extends Component {
     user={
        fname:'YASER',
        lname:'RIFAI'
    }
     formatuser(){
  return user.fname+' '+user.lname
    }
    render() {
        return (
            <div>
               <h1>{this.formatuser()}</h1> 
            </div>
        )
    }
}
