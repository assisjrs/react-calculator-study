import "./Calculator.css";

import React, { useState } from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";

const Calculator = (props) => {
    const [state, setState] = useState({
        accumulator: 0,
        digits: 0,
        clearDisplay: false,
        operator: ""
    });

    const onClickDigit = (digit) => {
        setState((state, props) => {
            if (state.clearDisplay) {
                return {
                    digits: digit,
                    accumulator: state.accumulator,
                    clearDisplay: false,
                    operator: state.operator
                };
            }

            const isZero = parseFloat(digit || 0) === 0;
            const number = isZero? "0": (state.digits || 0) + digit;

            return {
                digits: number,
                accumulator: state.accumulator,
                clearDisplay: false,
                operator: state.operator
            };
        }
        );
    }

    const onClickEquals = () => {
        let result = 0;

        const number = parseFloat(state.digits || 0);
        const accumulator = state.accumulator || 0;

        switch (state.operator) {
            case "+":
                result = accumulator + number;

                break;
            case "-":
                result = accumulator - number;

                break;
            case "*":
                result = accumulator * number;

                break;
            case "/":
                result = accumulator / number;

                break;
            default:
                result = accumulator + number;
                break;
        }

        setState((state, props) => {
            const newState = {
                digits: result,
                accumulator: result,
                clearDisplay: true,
                operator: state.operator
            }

            return newState;
        });
    }

    const onClickOperator = (operator) => {
        onClickEquals();

        state.clearDisplay = true;
        state.accumulator = parseFloat(state.digits || 0);
        state.operator = operator;
    }

    const onClickAccumatorClear = () => {
        state.accumulator = 0;
        state.digits = 0;
        state.clearDisplay = false;

        setState(
            {
                digits: 0,
                accumulator: 0,
                clearDisplay: true,
                operator: ""
            });
    }

    const onClickBackspace = () => {
        setState((state, props) => {
            const number = "" + state.digits || "0";
            const newNumber = number.substring(0, number.length - 1) || 0;

            return {
                digits: newNumber,
                clearDisplay: false,
                accumulator: state.accumulator,
                operator: state.operator
            };
        }
        );
    }

    return (
        <div className="Calculator">
            <Display value={state.digits} />

            <Keyboard
                onClickDigit={onClickDigit}

                onClickAccumatorClear={onClickAccumatorClear}
                onClickBackspace={onClickBackspace}

                onClickEquals={onClickEquals}
                onClickOperator={onClickOperator} />
        </div>
    );
}

export default Calculator;
