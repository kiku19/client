import React, { useState, useEffect, useRef } from "react";
import NavList from "./NavList";
import styled from "styled-components";

import MenuBar from "../icons/MenuBar.js";
import "../css/nav.css";

export const ToggleMenu = React.createContext();

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  height: 10%;
  flex-direction: column;
`;

const NavContainer = () => {
  const [toggle, setToggle] = useState(false);
  const refStyle = useRef(null);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      // console.log(clientHeight);
      refStyle.current.style.minWidth = "250px";
    } else {
      refStyle.current.style.minWidth = "60px";
    }
  }, [toggle]);

  return (
    <ToggleMenu.Provider value={toggle}>
      <nav style={navStyle} className="navStyle" ref={refStyle}>
        <Ul>
          <span
            className="leftContainer"
            style={toggleButton}
            onClick={toggleFunction}
          >
            <MenuBar width="21px"></MenuBar>
          </span>
        </Ul>
        <NavList></NavList>
      </nav>
      {console.log("NavContainer", toggle)}
    </ToggleMenu.Provider>
  );
};

export default NavContainer;

const navStyle = {
  position: "fixed",
  margin: "auto 2rem",
  height: "90vh",
  backgroundColor: "white",
  top: "0",
  width:"60px",
  bottom: "0",
  borderRadius: "5px",
  transition: "min-width 0.5s ease",
};

const toggleButton = {
  margin: "0 1rem",
  // padding: "0.8rem",
  cursor: "pointer",
};

