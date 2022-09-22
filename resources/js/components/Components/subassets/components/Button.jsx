import React from "react";
import ReactDom from "react-dom";

function Button(props) {
  return (
    <div className="mt-5 -mb-2">
      <button href={props.href} className="btn-buttonx btn-button-common">
        {props.name}
      </button>
    </div>
  );
}

export default Button;
