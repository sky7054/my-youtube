import React from "react";

const Button = ({name}) => {
    return(
        <div>
        <button className="pt-1 pb-1 px-2 py-2 m-2 bg-gray-200 rounded-lg" >{name}</button>
        </div>
    );
};

export default Button;