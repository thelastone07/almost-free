import React,{Component} from "react";
import './FirstpageOne.css'

class Firstpageone extends Component{

    render(){
        const {value}=this.props;
        return(
            
    <div className="container">
        <div className="topbar">
            <h1 id="title">Almost-free</h1>

             <div className="bgwrite">
            almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-freealmost-free almost-free almost-free almost-free almost-free almost-free
            almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-freealmost-free almost-free almost-free almost-free almost-free almost-free
            almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-freealmost-free almost-free almost-free almost-free almost-free almost-free
            almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-freealmost-free almost-free almost-free almost-free almost-free almost-free
            almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-freealmost-free almost-free almost-free almost-free almost-free almost-free
            almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-freealmost-free almost-free almost-free almost-free almost-free almost-free
            almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-freealmost-free almost-free almost-free almost-free almost-free almost-free
            almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-freealmost-free almost-free almost-free almost-free almost-free almost-free
            almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-freealmost-free almost-free almost-free almost-free almost-free almost-free
            almost-free almost-free almost-free almost-free almost almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-free almost-freealmost-free almost-free almost-free almost-free almost-free almost-free
            almost-free almost-free almost-free almost
            </div>
        </div>
        <div className="content">
            <div id="welcomeText">
                Welcome to your dream destination to choose the best of products at the best of prices.<div>Happy shopping!</div>
            </div>
            <div className="category">
                <div>-------------------------------------------------------------------------Categories------------------------------------------------------------------------------</div>
           
                <div className="categs">
                     <div className="categ">
                        <div className="heading">Fashion</div>
                        <img src="https://images.all-free-download.com/images/graphiclarge/blank_t_shirt_clip_art_19042.jpg" alt="T-shirt"/>
                        <button onClick={()=>value(2)}>visit</button>
                     </div>
                        <div className="categ">
                        <div className="heading">Electronics</div> 
                        <img src="https://previews.123rf.com/images/jemastock/jemastock1810/jemastock181001390/109408050-laptop-computer-isolated-in-black-and-white-vector-illustration-graphic-design.jpg" alt="laptop"/>
                         <button onClick={()=>value(3)}>visit</button>
                        </div>
                     <div className="categ">
                     <div className="heading" >Music</div>
                     <img src="https://png.pngtree.com/png-clipart/20201215/ourlarge/pngtree-trumpet-clip-art-musical-instrument-wind-performance-black-and-white-shadow-png-image_2562336.jpg" alt="trumpet"/>
                     
                         <button onClick={()=>value(4)}>visit</button>
                      </div>
                </div>
                <button onClick={()=>value(5)}>Go to cart</button>
            </div>
        </div>
        
    </div>

        )

    }
}

export default Firstpageone;

