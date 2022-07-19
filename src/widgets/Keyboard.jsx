import React from "react";
import Button from "./Button";

const Keyboard = (props) => {
    return (
        <div className="Keyboard">
            <table align="center">
                <tbody>
                    <tr>
                        <td> <Button number="7" /> </td>
                        <td> <Button number="8" /> </td>
                        <td> <Button number="9" /> </td>
                        <td> <Button number="/" /> </td>
                    </tr>

                    <tr>
                        <td> <Button number="4" /> </td>
                        <td> <Button number="5" /> </td>
                        <td> <Button number="6" /> </td>
                        <td> <Button number="*" /> </td>
                    </tr>

                    <tr>
                        <td> <Button number="1" /> </td>
                        <td> <Button number="2" /> </td>
                        <td> <Button number="3" /> </td>
                        <td> <Button number="-" /> </td>
                    </tr>

                    <tr>
                        <td> <Button number="0" /> </td>
                        <td> <Button number="." /> </td>
                        <td> <Button number="=" /> </td>
                        <td> <Button number="+" /> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Keyboard;
