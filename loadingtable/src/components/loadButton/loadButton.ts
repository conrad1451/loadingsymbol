import React from "react";
import "./loadButton.css";

// Sources
// [1]: https://stackoverflow.com/questions/68078359/how-to-add-onclick-function-to-a-button-in-typescript

// export const LoadButton = (props) => (
//   <button
//     className="load-button"
//     onClick={props.onLoad}
//   >
//     {props.title}
//   </button>
// );

let btn: HTMLButtonElement = <HTMLButtonElement>(
  document.createElement("button")
); //[1]

function LoadButton(props: any) {
  return (
    // <button className="load-button" onClick={props.onLoad}>
    //   {props.title}
    // </button>
    btn.addEventListener(props.title, (e: Event) => props.onLoad)
  );
}

export default LoadButton;
