import React from "react";

const Display = (props) => {
    return <div className="Display"><p>{props.value.toFixed(4)}</p></div>;
}

export default Display;
