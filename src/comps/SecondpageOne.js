import React, { Component } from 'react';
import Heading from './Heading';
import Body from './Body';
import './SecondPage.css'
import FirstpageOne from './FirstpageOne';
import Cartpage from './Cartpage';


class SecondpageOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                total:0,
                matchNumber:1,
                purchase:    [
                {   key:1,
                    name:"Long gown",
                    quantity:0,
                    price:200
                },
                {   key:2,
                    name:"Cute frock",
                    quantity:0,
                    price:120
                },
                {   key:3,
                    name:"Black dress",
                    quantity:0,
                    price:20
                },
                {   key:4,
                    name:"Suit",
                    quantity:0,
                    price:10
                },
                {   key:5,
                    name:"Robe",
                    quantity:0,
                    price:5
                },
                {   key:6,
                    name:"Pant",
                    quantity:0,
                    price:1
                },
                {   key:7,
                    name:"Antique mobile",
                    quantity:0,
                    price:200
                },
                {   key:8,
                    name:"Nokia N73",
                    quantity:0,
                    price:120
                },
                {   key:9,
                    name:"God whisperer",
                    quantity:0,
                    price:20
                },
                {   key:10,
                    name:"Stevie the TV",
                    quantity:0,
                    price:10
                },
                {   key:11,
                    name:"Lappy",
                    quantity:0,
                    price:5
                },
                {   key:12,
                    name:"Tubelight",
                    quantity:0,
                    price:1
                },
                {   key:13,
                    name:"Guitar",
                    quantity:0,
                    price:200
                },
                {   key:14,
                    name:"Piano",
                    quantity:0,
                    price:120
                },
                {   key:15,
                    name:"Trumpet",
                    quantity:0,
                    price:20
                },
                {   key:16,
                    name:"Tabla",
                    quantity:0,
                    price:10
                },
                {   key:17,
                    name:"Saxophone",
                    quantity:0,
                    price:5
                },
                {   key:18,
                    name:"Jhunjhuna",
                    quantity:0,
                    price:1
                },
            ]
                
        }
    }
    
    //write the value function here
    changeNumber=(num)=>{
        this.setState(
            {matchNumber:num}
        )
    }
    
    
    updateQuantity=(refno,amount)=>{
        let product=this.state.purchase
        product[refno-1].quantity=product[refno-1].quantity+amount
        if(product[refno-1].quantity<=0)
        product[refno-1].quantity=0
        this.setState({
            purchase:product
        })
    }

    render() {
       console.log(this.state.purchase[0].name)
        
        if(this.state.matchNumber===1)
        return(<FirstpageOne value={this.changeNumber}></FirstpageOne>)
        if(this.state.matchNumber===2)
        return (<>
            <Heading name="Fashion"></Heading>
            <div id="box">
                <Body
                    refno={1}
                    quant={this.state.purchase[0].quantity}
                    caller={this.updateQuantity}
                    name="Long gown"
                    image='https://www.kindpng.com/picc/m/239-2395859_dress-clipart-black-and-white-white-dress-clipart.png'
                    description="This is the dress worn by the great cindrelli"
                    price="$200"
                    >

                </Body>
                <Body
                refno={2}
                quant={this.state.purchase[1].quantity}
                    caller={this.updateQuantity}
                    name="Cute Frock"
                    image='https://i.pinimg.com/564x/5d/a1/9e/5da19eb663747d3fefc897cacd57ffbb--white-wedding-dresses-white-weddings.jpg'
                    description="Ever saw snow white? Yes,it is the dress"
                    price="$120"
                    >

                </Body>
                <Body
                refno={3}
                quant={this.state.purchase[2].quantity}
                    caller={this.updateQuantity}
                    name="Black dress"
                    image='https://i.pinimg.com/originals/f2/56/40/f256405e90c00cddc7c1c514c44e5462.jpg'
                    description="Got a date? Think no more"
                    price="$20"
                    >

                </Body>
                <Body
                refno={4}
                quant={this.state.purchase[3].quantity}
                    caller={this.updateQuantity}
                    name="Suit"
                    image='https://cdn.imgbin.com/12/15/16/imgbin-tracksuit-tuxedo-outerwear-clothing-suit-2KMG7W9jZvXc92uCTauBcvNWD.jpg'
                    description="Buy this for an interview. Atleast you will have a suit"
                    price="$10"
                    >

                </Body>
                <Body
                refno={5}
                quant={this.state.purchase[4].quantity}
                    caller={this.updateQuantity}
                    name="Robe"
                    image='https://thumbs.dreamstime.com/b/bathrobe-icon-outline-style-illustration-vector-web-design-80570384.jpg'
                    description="Do i need to describe?"
                    price="$5"
                    >

                </Body>
                <Body
                refno={6}
                quant={this.state.purchase[5].quantity}
                    caller={this.updateQuantity}
                    name="Pant"
                    image='data:image/png;base64,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'
                    description="Just a pant"
                    price="$1"
                    >

                </Body>



            </div>
            <div id="buttons">
                <button onClick={()=>this.changeNumber(1)}>Go home</button>
                <button onClick={()=>this.changeNumber(5)}>Go to cart</button>
            </div>
            </>
        )
        if(this.state.matchNumber===3)
        return (<>
            <Heading name="Electronics"></Heading>
            <div id="box">
                <Body
                refno={7}
                quant={this.state.purchase[6].quantity}
                    caller={this.updateQuantity}
                    name="Antique mobile"
                    image='https://www.kindpng.com/picc/m/9-97308_phone-mobile-clipart-black-and-white-clipartxtras-in.png'
                    description="The phone used in WW2 yet not destroyed"
                    price="$200"
                    >

                </Body>
                <Body
                refno={8}
                quant={this.state.purchase[7].quantity}
                    caller={this.updateQuantity}
                    name="Nokia N73"
                    image='https://www.pngkey.com/png/detail/33-336016_cell-phone-clip-art-black-and-white-free.png'
                    description="Why need a weapon when you have this"
                    price="$120"
                    >

                </Body>
                <Body
                refno={9}
                quant={this.state.purchase[8].quantity}
                    caller={this.updateQuantity}
                    name="God whisperer"
                    image='https://i.pinimg.com/originals/b3/b9/42/b3b94283c5a39656bd7eb833664f8aa6.jpg'
                    description="Hear everything, literally everything with this"
                    price="$20"
                    >

                </Body>
                <Body
                refno={10}
                quant={this.state.purchase[9].quantity}
                    caller={this.updateQuantity}
                    name="Stevie the TV"
                    image='data:image/png;base64,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'
                    description="Missing the old days? Wait no more"
                    price="$10"
                    >

                </Body>
                <Body
                refno={11}
                quant={this.state.purchase[10].quantity}
                    caller={this.updateQuantity}
                    name="Lappy"
                    image='https://previews.123rf.com/images/stockgiu/stockgiu1910/stockgiu191039689/133362325-laptop-icon-cartoon-in-black-and-white.jpg'
                    description="Cheapest of it's kind"
                    price="$5"
                    >

                </Body>
                <Body
                refno={12}
                quant={this.state.purchase[11].quantity}
                    caller={this.updateQuantity}
                    name="Tubelight"
                    image='https://thumbs.dreamstime.com/b/vector-black-white-light-bulb-icon-back-to-school-educational-clipart-cute-outline-illustration-education-clever-mind-192709559.jpg'
                    description="Don't have any idea? Use this instead"
                    price="$1"
                    >

                </Body>



            </div>
            <div id="buttons">
                <button onClick={()=>this.changeNumber(1)}>Go home</button>
                <button onClick={()=>this.changeNumber(5)}>Go to cart</button>
            </div>
            </>
        )
        if(this.state.matchNumber===4)
        return (<>
            <Heading name="Music"></Heading>
            <div id="box">
                <Body
                refno={13}
                quant={this.state.purchase[12].quantity}
                    caller={this.updateQuantity}
                    name="Guitar"
                    image='data:image/jpeg;base64,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'
                    description="Be the cool guy with a guitar"
                    price="$200"
                    >

                </Body>
                <Body
                refno={14}
                quant={this.state.purchase[13].quantity}
                    caller={this.updateQuantity}
                    name="Piano"
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsnoS4IUdd6YtwKNDdWmyBbzC6N5sTQVgoUj8BfKf5s4WnGPOuKvb1OAqAT8_LJ5AjeY&usqp=CAU'
                    description="The rich people's instrument"
                    price="$120"
                    >

                </Body>
                <Body
                refno={15}
                quant={this.state.purchase[14].quantity}
                    caller={this.updateQuantity}
                    name="Trumpet"
                    image='https://png.pngtree.com/png-clipart/20201215/ourlarge/pngtree-trumpet-clip-art-musical-instrument-wind-performance-black-and-white-shadow-png-image_2562336.jpg'
                    description="Perempeee...just buy one to hear that"
                    price="$20"
                    >

                </Body>
                <Body
                refno={16}
                quant={this.state.purchase[15].quantity}
                    caller={this.updateQuantity}
                    name="Tabla"
                    image='https://i.pinimg.com/originals/2e/5a/c9/2e5ac93b6d7ed9516d6f973471c64a29.png'
                    description="Indianess at its peak"
                    price="$10"
                    >

                </Body>
                <Body
                refno={17}
                quant={this.state.purchase[16].quantity}
                    caller={this.updateQuantity}
                    name="Saxophone"
                    image='https://previews.123rf.com/images/jemastock/jemastock1911/jemastock191101947/133063185-classical-instruments-saxophone-icon-over-white-background-vector-illustration.jpg'
                    description="It's a saxophone...you play it"
                    price="$5"
                    >

                </Body>
                <Body
                
                refno={18}
                quant={this.state.purchase[17].quantity}
                    caller={this.updateQuantity}
                    name="Jhunjhuna"
                    image='https://png.pngtree.com/png-vector/20191108/ourlarge/pngtree-two-maracas-icon-simple-style-png-image_1953303.jpg'
                    description="Anyone, yes anyone can play this"
                    price="$1"
                    >

                </Body>



            </div>
            <div id="buttons">
                <button onClick={()=>this.changeNumber(1)}>Go home</button>
                <button onClick={()=>this.changeNumber(5)}>Go to cart</button>
            </div>
            </>
        )
        if(this.state.matchNumber===5){
            let trail=this.state.purchase.filter(item=>item.quantity>0);
            let total=0
            for(let i=0;i<trail.length;i++){
                total+=trail[i].quantity*trail[i].price;
            }
            let display=trail.map(item=><Cartpage  number={item.key+1} name={item.name} quantity={item.quantity}></Cartpage>)
        return(
            <>
              <h1 id="categoryName">Welcome to the Cart-Page</h1>
              <div id="itemHeading">
                  <li>
                      <ul>Product Name</ul>
                      <ul>Quantity</ul>
                      <ul>Amount</ul>
                  </li>
              </div>
              <div id="itemBody">{display}</div>
              <div id="total">Grand Total is ${total}</div>
              <h1 id="extro">Wish you had a good experience</h1>
              <div id="lastButton"><button  onClick={()=>this.changeNumber(1)}>Go home</button>
              </div>
            </>
        )}
    }
}

export default SecondpageOne
/* sooo what u need to do to complete the task is is is is is is is is pass a function as prop to the common thingy and on click of button chnage 
the state there and the function that is calle here changes  the state of this thing...so everyone happy??  reuse ur code and make it fucking small*/