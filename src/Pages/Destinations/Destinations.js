import React from "react";
import './Destinations.css';
import data from "../../Constants/data.js";
import Layout from "../../Components/Layout";


class Destination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDest: 0
        }
        this.changeState = this.changeState.bind(this)

    }

    // const mainBg = {
    //     background: "url('../../assets/destination/background-destination-desktop.jpg') no-repeat center fixed !important"
    // }
    changeState(value) {
        this.setState({ activeDest: value })
    }
   
    render() {
        
        const { name, images, description, distance, travel } = data.destinations[this.state.activeDest];
        
        return (
           <Layout>
            <div id="destination">

                <div className="container flex-wrap d-flex justify-content-between">
                    <div className="w-50 div1">
                        <div className="mb-5" >
                            <p className="heading5 headertext"> <span id="optxt" className="m-3">01</span>PICK YOUR DESTINATION</p>
                        </div>

                        <div id="imgdiv">
                            <img src={images.webp} alt={name} width="80%"/>
                        </div>
                    </div>

                    <div className="w-50 div2">
                        <div className="destnav mb-5">
                            <a href="javascript:void(0);" onClick={(e) => this.changeState(0)} >Moon</a>
                            <a href="javascript:void(0);" onClick={(e) => this.changeState(1)}>Mars</a>
                            <a href="javascript:void(0);" onClick={(e) => this.changeState(2)}>Europa</a>
                            <a href="javascript:void(0);" onClick={(e) => this.changeState(3)}>Titan</a>
                        </div>

                            <br />
                           
                        <div className="heading2" id="destname">{name.toUpperCase()}</div>
                        <div ><p className="opbodytxt" id="destdesc">{description}</p></div>

                        <hr className="my-5" />
                        <div className="row ">
                            <div className="col-6 destdist">
                                <span className="opbodytxt">AVG. DISTANCE</span>
                                <br /> {distance.toUpperCase()}
                            </div>
                            <div className="col-6 destdist">
                                <span className="opbodytxt">EST. TRAVEL TIME </span>
                                <br /> {travel.toUpperCase()}
                            </div>
                        </div>


                    </div>
                </div>

            </div></Layout>
        )
    }
}

export default Destination;