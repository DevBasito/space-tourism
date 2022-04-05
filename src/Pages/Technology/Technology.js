import React from "react";
import './Technology.css';
import data from "../../Constants/data.js";

class Technology extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTech: 0
        }
        this.changeState = this.changeState.bind(this)
    }

    changeState(value) {
        this.setState({ activeTech: value })
    }

    render() {

        const { name, images, description } = data.technology[this.state.activeTech];
        return (
            <>
                <div className="mb-5 container"id="headertext" >
                    <p className="heading5" > <span id="optxt" className="m-3">03</span>SPACE LAUNCH 101</p>
                </div>

                <div className="container flex-wrap d-flex justify-content-between" id="container">
                    <div className="w-50 div1">


                        <br />

                        <div className="row">

                            <div className="col-3" id="technav">
                                <span className="tnav heading4" onClick={(e) => this.changeState(0)} ><a href="javascript:void(0)" >1</a></span>
                                <span className="tnav heading4" onClick={(e) => this.changeState(1)} ><a href="javascript:void(0)" >2</a></span>
                                <span className="tnav heading4" onClick={(e) => this.changeState(2)} ><a href="javascript:void(0)" >3</a></span>

                            </div>


                            <div className="col-8" id="techdesc">
                                <div><p className="">THE TERMINOLOGY ...</p></div>
                                <div className="heading4" >{name.toUpperCase()}</div>
                                <div className="" >{description}</div>

                            </div>





                        </div>




                    </div>

                    <div className="w-50 div2 ">
                        <div className="text-center ">
                            <img src={images.portrait} alt={name} width="80%" className="imgchange"/>
                        </div>



                    </div>
                </div>

            </>
        )
    }
}
export default Technology;