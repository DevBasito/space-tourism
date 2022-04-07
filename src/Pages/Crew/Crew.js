import React from "react";
import './Crew.css';
import data from "../../Constants/data.js";



class Crew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCrew: 0
        }
        this.changeState = this.changeState.bind(this)

    }

    changeState(value) {
        this.setState({ activeCrew: value })
    }

    componentDidMount(){
        document.querySelector('.App').style.background= `url("../../assets/crew/background-crew-desktop.jpg") no-repeat
        center fixed`;
    }
    
    render() {

        const { name, images, role, bio } = data.crew[this.state.activeCrew];

        return (
            <>
                <div className="container flex-wrap d-flex justify-content-between" >
                    <div className="w-50 div1">
                        <div className="mb-5" >
                            <p className="heading5" id="headertext"> <span id="optxt" className="m-3">02</span>MEET YOUR CREW</p>
                        </div>


                        <br />



                        {/* Mobile */}
                        <div id="imgdiv" className="text-center mbl" >
                            <img src={images.webp} alt={name} width="80%" />
                            <hr />
                            <br />
                        </div>
                        
                        
                        {/* Mobile */}

                        <div className="Dtab">
                            <div className="heading4" id="crewrole">{role.toUpperCase()}</div>
                            <div className="heading3" id="crewname">{name.toUpperCase()}</div>
                            <div ><p id="crewbio">{bio}</p></div>
                        </div>

                        <br />


                        <div className="crewnav ">
                            <span className="dot" onClick={(e) => this.changeState(0)} ><a href="javascript:void(0)"></a></span>
                            <span className="dot" onClick={(e) => this.changeState(1)} ><a href="javascript:void(0)"></a></span>
                            <span className="dot" onClick={(e) => this.changeState(2)} ><a href="javascript:void(0)"></a></span>
                            <span className="dot" onClick={(e) => this.changeState(3)} ><a href="javascript:void(0)"></a></span>
                        </div>




                    </div>

                    <div className="w-50 div2 ">
                        <div id="imgdiv" className="text-center Dtab">
                            <img src={images.webp} alt={name} width="80%" />
                        </div>

                        {/* Mobile */}
                        
                        <div className="mbl">
                            <br />
                            <div className="heading4" id="crewrole">{role.toUpperCase()}</div>
                            <div className="heading3" id="crewname">{name.toUpperCase()}</div>
                            <div ><p id="crewbio">{bio}</p></div>

                        </div>
                        
                        {/* Mobile */}

                    </div>
                </div>

            </>
        )
    }
}

export default Crew;