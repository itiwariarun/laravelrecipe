import React from "react";
import ReactDom from "react-dom";

function Input(props) {
  return (
    <div>
      <input
        id={props.email}
        name={props.email}
        type={props.email}
        autoComplete={props.email}
        required
        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
}

export default Input;
