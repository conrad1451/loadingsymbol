import React from "react";
import "./loadButton.css";

// export const LoadButton = (props) => (
//   <button
//     className="load-button"
//     onClick={props.onLoad}
//   >
//     {props.title}
//   </button>
// );

function LoadButton(props) {
  return (
    <button className="load-button" onClick={props.onLoad}>
      {props.title}
    </button>
  );
}

export default LoadButton;
