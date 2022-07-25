import React from "react";
import Button from "./Button";

const Keyboard = (props) => {
    return (
        <div className="Keyboard">
            <table align="center">
                <tbody>
                <tr>
                        <td className="LargeButton" colSpan="2"> <Button
                            character="AC" onClick={props.onClickAccumatorClear} /> </td>
                        <td> <Button character="<" onClick={props.onClickBackspace}/> </td>
                        <td> <Button character="/" onClick={props.onClickOperator} /> </td>
                    </tr>

                    <tr>
                        <td> <Button character="7" onClick={props.onClickDigit}/> </td>
                        <td> <Button character="8" onClick={props.onClickDigit} /> </td>
                        <td> <Button character="9" onClick={props.onClickDigit} /> </td>
                        <td> <Button character="*" onClick={props.onClickOperator} /> </td>
                    </tr>

                    <tr>
                        <td> <Button character="4" onClick={props.onClickDigit} /> </td>
                        <td> <Button character="5" onClick={props.onClickDigit} /> </td>
                        <td> <Button character="6" onClick={props.onClickDigit} /> </td>
                        <td> <Button character="-" onClick={props.onClickOperator} /> </td>
                    </tr>

                    <tr>
                        <td> <Button character="1" onClick={props.onClickDigit} /> </td>
                        <td> <Button character="2" onClick={props.onClickDigit} /> </td>
                        <td> <Button character="3" onClick={props.onClickDigit} /> </td>
                        <td> <Button character="+" onClick={props.onClickOperator} /> </td>
                    </tr>

                    <tr>
                        <td> <Button character="0" onClick={props.onClickDigit} /> </td>
                        <td> <Button character="." onClick={props.onClickDigit} /> </td>
                        <td className="LargeButton" colSpan="2"> <Button
                         character="=" onClick={props.onClickEquals} /> </td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Keyboard;
