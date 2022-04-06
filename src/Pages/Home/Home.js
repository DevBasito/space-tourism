import React from "react";
import './Home.css';
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <div id="home">


            <div className="container justify-content-around flex-wrap d-flex" id="hometext">
                <div className="" id="f1">
                    <h5 className="heading5">SO, YOU WANT TO TRAVEL TO</h5>
                    <p className="text-light heading1">SPACE</p>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!
                    </p>


                </div>

               
                <div class="round-button">
                    <div class="round-button-circle">
                        <Link to="/destination" class="round-button">Explore</Link>
                    </div>
                </div>
                
            </div>

        </div>
    )
}


export default Home;