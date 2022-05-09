import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components";

const Div = styled.div`
  &.scroll-bar {
    width: 5px;
    height: 90%;
    right: 0;
    // top: 0px;
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
    display: inline-flex;
    align-items: center;
    overflow: hidden;
  }
`;

export default function CustomScrollDiv({ children, className, ...restProps }) {
  const containerRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [scrollThumbHeight, setScrollThumbHeight] = useState();
  const [scrollBoxTop, setScrollBoxTop] = useState(0);
  const [overflow,setOverflow] = useState(false);

  if (containerRef.current) {
    containerRef.current.style.height = "100%";
  }

  const handleMouseOver = useCallback(() => {
    console.log("show")
   setHovering(true);
  }, []);
  const handleMouseOut = useCallback(() => {
  setHovering(false);
  }, []);


  const handleScroll = useCallback(() => {
    if (!containerRef) {
      return;
    }
    console.log("scroll");
    const scrollHostElement = containerRef.current.firstChild;

    const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement;

    let newTop = (parseInt(scrollTop) / parseInt(scrollHeight)) * offsetHeight;

    // newTop = newTop + parseInt(scrollTop, 10);
    newTop = Math.min(newTop);
    setScrollBoxTop(newTop);
  }, []);

  useEffect(() => {
    const { clientHeight, scrollHeight } = containerRef.current.firstChild;
    setOverflow(clientHeight<scrollHeight);

    setScrollThumbHeight((clientHeight / scrollHeight) * clientHeight * (90 / 100));

    containerRef.current.firstChild.addEventListener(
      "scroll",
      handleScroll,
      true
    );


    return function cleanup() {
      containerRef.current.firstChild.removeEventListener(
        "scroll",
        handleScroll,
        true
      );
    };

  });

  return (
    <Div
      className={"scrollhost-container"}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div ref={containerRef}>{children}</div>
      <Div className={"scroll-bar"} style={{ opacity: hovering && overflow ? 1 : 0 }}>
        <div
          className={"scroll-thumb"}
          style={{
            height: scrollThumbHeight,
            top: scrollBoxTop,
            position: "relative",
            backgroundColor: "#53a6a3",
            borderRadius:"13px",
          }}
        />
      </Div>
    </Div>
  );
}
