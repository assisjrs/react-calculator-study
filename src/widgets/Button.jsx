import React from "react";

const Button = (props) => {
    return <button onClick={props.onClick}>{props.number}</button>;
}

export default Button;
