import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {

    return (
        <div className="container d-flex justify-content-center bg-dark p-2" id="container">
            <div className="card">
                <div className="card-body bg-dark">
                    <h5 className="days text-white"><FontAwesomeIcon icon={faClock}/></h5>
                </div>
            </div>
            <div className="card">
                <div className="card-body bg-dark">
                    <h5 className="days text-white">{props.cMillar % 10}</h5>
                </div>
            </div>
            <div className="card">
                <div className="card-body bg-dark">
                    <h5 className="days text-white">{props.dMillar % 10}</h5>
                </div>
            </div>
            <div className="card">
                <div className="card-body bg-dark">
                    <h5 className="days text-white">{props.uMillar % 10}</h5>
                </div>
            </div>
            <div className="card">
                <div className="card-body bg-dark">
                    <h5 className="hours text-white">{props.centenas % 10}</h5>
                </div>
            </div>
            <div className="card">
                <div className="card-body bg-dark">
                    <h5 className="minutes text-white">{props.decenas % 10}</h5>
                </div>
            </div>
             <div className="card">
                <div className="card-body bg-dark">
                    <h5 className="seconds text-white">{props.unidades % 10}</h5>
                </div>
            </div>
        </div>
    );
};

Counter.propTypes = {
    unidades: PropTypes.number,
    decenas: PropTypes.number,
    centenas: PropTypes.number,
    uMillar: PropTypes.number,
    dMillar: PropTypes.number,
    cMillar: PropTypes.number,
};

export default Counter;