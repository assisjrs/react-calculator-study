import React from "react";

const Button = (props) => {
    const character = props.character;

    return <button onClick={_ => props.onClick(character)}>{character}</button>;
}

export default Button;
