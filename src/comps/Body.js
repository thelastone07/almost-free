import React, { Component } from 'react'
import './SecondPage.css'

class Body extends Component {
      
    

    render() {
        const {refno,quant,caller,name,image,description,price}=this.props
        
        return (
            
            <div className="item">
                        <div id="titleName">{name}</div>
                        <div className="image">
                            <img src={image}></img>
                        </div>
                        <div className="descContent">
                            <div className="desc">{description}</div>
                            <div><div className="price">{price}</div>
                            <div className="quantity">
                                <button onClick={()=>{caller(refno,-1)}}>-</button>{quant}<button onClick={()=>{caller(refno,1)}}>+</button>
                            </div>  
                            </div> 
                        </div> 

                    </div>
            
        )
    }
}

export default Body
