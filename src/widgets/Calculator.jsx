import "./Calculator.css";

import React from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";

const state = {
    acumulador: 10
};

const Calculator = (props) => {
    return (
        <div className="Calculator">
            <Display value={state.acumulador}/>

            <Keyboard />
        </div>
    );
}

export default Calculator;
