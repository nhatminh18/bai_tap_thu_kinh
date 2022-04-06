import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'

export default class BTThuKinh extends Component {

    state = {
        currentGlass:
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }


    renderGlasses = () => {
        return dataGlasses.map((glassItem, index) => {
            return <img onClick={()=> {this.changeGlass(glassItem)}} key={index} className='mx-2 p-1 border' style={{ width: '100px', cursor: 'pointer' }} src={glassItem.url} alt="glass" />
        })
    }

    changeGlass = (glass) => {
        this.setState({
            currentGlass:glass
        })
    }
 

    render() {

        const keyFrame = `
            @keyframes changeGlassAnimation${Date.now()} {
                from {
                    width: 0;
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                    opacity: 0;
                }
            
                to {
                    width: 150px;
                    -ms-transform: rotate(0deg);
                    transform: rotate(0deg);
                    opacity: .8;
                }
            }
        `

        const glassContent = {
            width: '250px',
            top: '200px',
            left: '270px',
            backgroundColor: 'rgba(0,0,0,.5)',
            textAlign: 'left',
            height: '105px',
            padding: '10px',
            fontWeight: 'bold',
            color: '#ddd'
            
        }

        return (
            <div style={{ backgroundImage: 'url(./glassesImage/bg.webp)', minHeight: '1000px', backgroundSize: '2000px' }}>
                <style>
                    {keyFrame}
                </style>

                <div style={{ backgroundColor: 'rgba(0,0,0,.5)', minHeight: '1000px' }}>
                    <h3 style={{ backgroundColor: 'rgba(0,0,0,.5)' }} className='text-center text-light display-4'>Thử kính</h3>
                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className="col-6">
                                <div className="position-relative">
                                    <img className='position-absolute' style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="model" />
                                    <img className='position-absolute' style={{ top: '75px', right: '70px', width: '150px', opacity: '.8', animation: `changeGlassAnimation${Date.now()} 1s` }} src={this.state.currentGlass.url} alt="glass" />
                                    <div style={glassContent} className="position-relative">
                                        <p className='mb-2' style={{color: 'orange'}}>{this.state.currentGlass.name}</p>
                                        <p style={{fontSize:'12px'}}>{this.state.currentGlass.desc}</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-6">
                                <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="model" />
                            </div>

                        </div>


                    </div>

                    {/* Div chứa các kính */}
                    <div style={{ opacity: '.9' }} className="bg-light container text-center mt-5 d-flex justify-content-center align-items-center p-5">
                        {this.renderGlasses()}
                    </div>
                </div>
            </div>
        )
    }
}
