import React from 'react'
import "../CSS/Tarrif.css";

function Tarrif() {
    return (
        <div className="tarrif">
            <div className="maincontatiner">
                <input type="checkbox" name="change" id="change" />
                <input type="checkbox" name="cart" id="card" />
                <div id="card">
                    <div className="front">
                        hiii
                    </div>
                    <h2 className="center"> 500$ </h2>

                    <div className="tarrif__buttons">

                        <label for="change" className="tarrif__button"></label>
                        <label for="cart" className="tarrif__button"></label>

                    </div>
                    <div id="back">
                        <h2 align="center"> Shoe </h2>
                        <p>  fuck u all </p>
                        <div className="details">
                            <div className="type"> Review </div>
                            <div className="property">
                                5 star
                            </div>

                        </div>
                        <div className="details">
                            <div className="type">Size: </div>
                            <div className="property">
                                5 star
                            </div>
                        </div>

                        <div className="details">
                            <div className="type">Color: </div>
                            <div className="property">
                                black
                            </div>
                        </div>

                        
                        <button> Buy now </button>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Tarrif
