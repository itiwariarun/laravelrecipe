import React from "react";
import ReactDom from "react-dom";

function Radio(props) {
  return (
    <div>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
      />
    </div>
  );
}

export default Radio;
