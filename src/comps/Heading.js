import React, { Component } from 'react'
import './SecondPage.css'

class Heading extends Component {

   
    render() {
        return (
            
                <h1 id="categoryName">Welcome to the {this.props.name} stop</h1>
            
        )
    }
}

export default Heading
