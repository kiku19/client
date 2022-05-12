import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components";

function CustomScrollDiv({ children, className, ...restProps }) {
  const containerRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [scrollThumbHeight, setScrollThumbHeight] = useState();
  const [scrollBoxTop, setScrollBoxTop] = useState(0);
  const [overflow, setOverflow] = useState(false);

  //Handling Mouse Over & Out Scroll
  const handleMouseOver = useCallback(() => {
    setHovering(true);
  }, []);
  const handleMouseOut = useCallback(() => {
    setHovering(false);
  }, []);
  //End

  const handleScroll = useCallback(() => {
    if (!containerRef) {
      return;
    }
    const scrollHostElement = containerRef.current.firstChild;

    const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement;

    let newTop = (parseInt(scrollTop) / parseInt(scrollHeight)) * offsetHeight;

    // newTop = newTop + parseInt(scrollTop, 10);
    newTop = Math.min(newTop);
    setScrollBoxTop(newTop);
  }, []);

  useEffect(() => {
    const { clientHeight, scrollHeight } = containerRef.current.firstChild;

    setOverflow(clientHeight < scrollHeight);

    setScrollThumbHeight(
      (clientHeight / scrollHeight) * clientHeight * (90 / 100)
    );

    overflow && containerRef.current.firstChild.addEventListener("scroll",handleScroll,);

    return function cleanup() {
      console.log("Scroll removed");
      overflow && containerRef.current.firstChild.removeEventListener(
        "scroll",
        handleScroll,
        true
      );
    };
  });

  return (
    <Div
      className={"scrollhost-container"}
      onMouseOver={ overflow?handleMouseOver:undefined}
      onMouseOut={overflow?handleMouseOut:undefined}
    >
      <div ref={containerRef} style={{ height: "100%" }}>
        {children}
      </div>
      <Div
        className={"scroll-bar"}
        style={{ opacity: hovering && overflow ? 1 : 0 }}
      >
        <div
          className={"scroll-thumb"}
          style={{
            height: scrollThumbHeight,
            top: scrollBoxTop,
            position: "relative",
            backgroundColor: "#53a6a3",
            borderRadius: "13px",
          }}
        />
      </Div>
    </Div>
  );
}
 export default React.memo(CustomScrollDiv);
const Div = styled.div`
  &.scroll-bar {
    width: 5px;
    height: 90%;
    right: 0;
    top: 10%;
    transition: 0.3s;
    margin: auto 0px;
    position: absolute;
    border-radius: 7px;
    // bottom: 0px;
    background-color: rgba(0, 0, 0, 0.35);
    overflow: hidden;
  }
  &.scrollhost-container {
    position: relative;
    height: 90%;
    // display: inline-flex;
    // align-items: center;
    overflow: hidden;
  }
`;
