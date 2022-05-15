import React, { useEffect, useState, useContext } from "react";
import ToolTipContent from "./ToolTipContent";
import { CSSTransition } from "react-transition-group";
import { Toggle } from "./Nav";

const container = document.createElement("div");
document.body.appendChild(container);

const ToolTip = ({ children, name }) => {

  const toggle = useContext(Toggle);
  const [pos, setPos] = useState({});
  const [content, setContent] = useState();
  const [hover, sethover] = useState(false);

  const enter = (e) => {
    if (!toggle) {
      const properties = e.currentTarget.getBoundingClientRect();
      console.log(properties);
      setContent(e.currentTarget.getAttribute("data-tip"));
      setPos(properties);
      sethover(true);
    }
  };

  const leave = () => {
    sethover(false);
  };

  useEffect(() => {
    const element = Array.from(document.getElementsByClassName(name));
    element.forEach((e) => {
      e.addEventListener("mouseenter", enter);
      e.addEventListener("mouseleave", leave);
    });
    return ()=>{
      element.forEach((e) => {
        e.removeEventListener("mouseenter", enter);
        e.removeEventListener("mouseleave", leave);
      });
    }
  }, []);

  return (
    <>
      {children}
      {!toggle && (
        <CSSTransition
          in={hover}
          timeout={{ enter: 300, exit: 3000 }}
          unmountOnExit
          classNames="toolTipTransition"
          onExited={() => setPos({}, setContent(null))}
        >
          <ToolTipContent
            adjustment={{ left: "6.4" }}
            container={container}
            pos={pos}
            content={content}
          ></ToolTipContent>
        </CSSTransition>
      )}
    </>
  );
};

export default React.memo(ToolTip);
