import React, { useEffect, useState,useContext} from "react";
import ToolTipContent from "./ToolTipContent";
import { CSSTransition } from "react-transition-group";
import { Toggle } from "./Nav";

const container = document.createElement("div");
document.body.appendChild(container);

const ToolTip = ({ children, name }) => {
  const toggle = useContext(Toggle)
  console.log("rendered",toggle)
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({});
  const [content, setContent] = useState();
  const enter = (e) => {
    if(!toggle)
{    const properties = e.currentTarget.getBoundingClientRect();
    console.log(properties);
    setContent(e.currentTarget.getAttribute("data-tip"));
    setPos(properties);}
  };


  useEffect(() => {
    const element = Array.from(document.getElementsByClassName(name));
    element[0].parentElement.addEventListener("mouseenter", () => {
      setActive(true);
    });
    element[0].parentElement.addEventListener("mouseleave", () => {
      setActive(false);
    });
    element.forEach((e) => {
      e.addEventListener("mouseenter", enter);
    });
  }, []);

  return (
    <>
      {children}
{ !toggle &&     <CSSTransition
        in={active}
        timeout={{enter:300,exit:3000}}
        unmountOnExit
        classNames="toolTipTransition"
        onExited={()=>setPos({},setContent(null))}
      >
        <ToolTipContent
          adjustment={{ left: "6.4" }}
          container={container}
          pos={pos}
          content={content}
        ></ToolTipContent>
      </CSSTransition>}
    </>
  );
};

export default React.memo(ToolTip);
