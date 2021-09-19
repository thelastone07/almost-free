import React, { PureComponent } from 'react'
import './FirstpageOne.css'

class Cartpage extends PureComponent {

  
    
    
    
    render() {
        console.log("render");
        let {number,name,quantity}=this.props
        let amount=0
        if(number%6===1){amount=200*quantity;}
        if(number%6===2){amount=120*quantity;}
        if(number%6===3){amount=20*quantity;}
        if(number%6===4){amount=10*quantity;}
        if(number%6===5){amount=5*quantity;}
        if(number%6===0){amount=1*quantity;}
        
        return (
            <div id="itemContainer">
                <li>
                    <ul id="itemName">{name}</ul>
                    <ul id="itemQuantity" >{quantity}</ul>
                    <ul id="itemAmount" >${amount}</ul>
                </li>
            </div>
        )
    }
}

export default Cartpage;
