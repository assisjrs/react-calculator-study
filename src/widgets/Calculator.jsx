import "./Calculator.css";

import React from "react";

const Calculator = (props) => {
    return (
        <div className="Calculator">
            <div className="Display"><p>1234.00</p></div>

            <div className="Keyboard">
                <table align="center">
                    <tr>
                        <td> <button>7</button> </td>
                        <td> <button>8</button> </td>
                        <td> <button>9</button> </td>
                        <td> <button>/</button> </td>
                    </tr>

                    <tr>
                        <td> <button>4</button> </td>
                        <td> <button>5</button> </td>
                        <td> <button>6</button> </td>
                        <td> <button>*</button> </td>
                    </tr>

                    <tr>
                        <td> <button>1</button> </td>
                        <td> <button>2</button> </td>
                        <td> <button>3</button> </td>
                        <td> <button>-</button> </td>
                    </tr>

                    <tr>
                        <td> <button>0</button> </td>
                        <td> <button>.</button> </td>
                        <td> <button>=</button> </td>
                        <td> <button>+</button> </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Calculator;
