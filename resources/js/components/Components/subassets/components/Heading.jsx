import React from "react";
import ReactDom from "react-dom";

function Heading(props) {
  return (
    <div>
      <div className=" sm:mx-auto sm:w-full sm:max-w-md">
        <img className="hidden w-auto h-12 mx-auto" src="" alt="Your Company" />
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-200">
          {props.head}
        </h2>
        <p className="mt-2 text-sm text-center text-orange-400">
          {props.support}{" "}
          <span className="font-medium text-indigo-100 hover:text-orange-600">
            {props.subhead}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Heading;
