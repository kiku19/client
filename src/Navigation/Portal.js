import React, { useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Width } from "./WidthCalc";

const divStyle = {
  fontFamily:"calibri",
  display : "inline-flex",
  visibility : "hidden",
  position : "fixed"
}

const Portal = ({ children }) => {
  const div = document.createElement("div");
  for (let style in divStyle) div.style[style] = divStyle[style]
  document.body.appendChild(div);
  // console.log(children);

  const widthContext = useContext(Width);

  useEffect(() => {
    const width = div.getBoundingClientRect().width;
    console.log(width);
    widthContext.getMinWidth(width);
  }, []);

  useEffect(() => {
    document.body.removeChild(div);
  });

  return ReactDOM.createPortal(children, div);
};

export default React.memo(Portal);

