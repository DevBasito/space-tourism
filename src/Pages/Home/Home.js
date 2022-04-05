import React from "react";
import './Home.css';


const Home = () => {
    
    return(
        <div id="home">
      
            
            <div className="container flex-wrap d-flex" id="hometext">
                <div className="" id="f1">
                    <h5 className="heading5">SO, YOU WANT TO TRAVEL TO</h5>
                    <p className="text-light heading1">SPACE</p> 
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>
        

                </div>
                
                
                <div  className="container rounded-circle   align-self-baseline align-self-end  my-auto mt-5" id="homebutton">
                    {/* <button className="btn btn-lg  rounded-circle btn-light " id="expbtn"> */}
                    <p id="txt" className="text-center">EXPLORE</p>  
                    {/* </button> */}
                </div>
                
            </div>
        
        </div>
    )
}


export default Home;