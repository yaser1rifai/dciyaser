import React, { Component } from 'react'

class MyComponent extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
            </div>
        )
    }
}

export default MyComponent;
