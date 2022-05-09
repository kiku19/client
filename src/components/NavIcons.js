import React, { useState, useEffect, useRef, useContext } from "react";
import NavText from "./NavText.js";
import { ToggleMenu } from "./NavContainer";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

// const Span = styled.span`
// &:hover{
//   ${({item})=>{
//     item.icon 
//   }}
// }`

const NavIcons = ({ item }) => {
  const toggle = useContext(ToggleMenu);
  
  const iconRef = useRef(null);
  
  const iconCLick = () => {

    //inEfficient coding find alternative later
    Array.from(iconRef.current.parentNode.children).forEach((element) => {
      element.firstChild.classList.remove("active");
    });
    iconRef.current.firstChild.classList.add("active");
    console.log(iconRef.current.children);

    const navIcon = document.getElementsByClassName("navIcon");
    Array.from(navIcon).forEach((element) => {
      element.firstChild.firstChild.classList.remove("iconActive");
    });
    iconRef.current.firstChild.firstChild.firstChild.firstChild.firstChild.classList.add(
      "iconActive"
    );
    //inEfficient end
  };



  return (
    <>
      <a
        className="navItems"
        href={item.href}
        ref={iconRef}
        onClick={iconCLick}
      >
        <span className={"spanHover leftContainer"}>

          <i className="container">{item.icon}</i>

          <CSSTransition in={toggle} timeout={200} unmountOnExit classNames="my-node">
            {<NavText text={item.text}></NavText>}
          </CSSTransition>

        </span>
      </a>
      {console.log("navIcon rendered")}
    </>
  );
};

export default React.memo(NavIcons);
