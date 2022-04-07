import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor() {
        super();
    }

    componentDidMount(){
        document.querySelector('.App').style.background= `url("../../assets/home/background-home-desktop.jpg") no-repeat
        center fixed`;
    }

    render() {
        return (
            <>
                <div className="container justify-content-around flex-wrap d-flex" id="hometext">
                    <div className="" id="f1">
                        <h5 className="heading5">SO, YOU WANT TO TRAVEL TO</h5>
                        <p className="text-light heading1">SPACE</p>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                            outer space and not hover kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world experience!
                        </p>


                    </div>


                    <div className="round-button">
                        <div className="round-button-circle">
                            <Link to="/destination" className="round-button">Explore</Link>
                        </div>
                    </div>

                </div>


            </>



        )
    }

}


export default Home;