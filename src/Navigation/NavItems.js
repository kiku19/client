import React from "react";
import Home from "./Icon/Home";
import styled from "styled-components";
import NavIcon from "./NavIcon";
import CustomScrollDiv from "./Scroll";
import ToolTip from "./ToolTip";

const items = [
  { icon: Home, text: "Home" },
  { icon: Home, text: "Control" },
  { icon: Home, text: "Animal" },
  { icon: Home, text: "Subject" },
  { icon: Home, text: "Chat" },
  { icon: Home, text: "About" },
  { icon: Home, text: "Client" },
];

const Ul = styled.ul`
  display: inline-flex;
  flex-direction: column;
  padding: 0 0.4rem 0 0.4rem;
  height: 100%;

  &.scroll-host {
    overflow: auto;
    scrollbarwidth: none;
    msoverflowstyle: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const NavItem = () => {
  const click = (e) => {
    const NavIcon = document.getElementsByClassName("NavIcon");

    Array.from(NavIcon).forEach((element) => {
      if (element !== e.currentTarget) {
        element.style.backgroundColor = "#ffffff";
        element.classList.remove("active");
      } else {
        e.currentTarget.style.backgroundColor = "#E5F2F5";
        e.currentTarget.classList.add("active");
      }
    });
  };
  return (
    <CustomScrollDiv>
      <Ul className="scroll-host">
        {items.map(({ icon, text }) => (
          <NavIcon key={text} icon={icon} text={text} click={click}></NavIcon>
        ))}
      </Ul>
      <ToolTip></ToolTip>
    </CustomScrollDiv>
  );
};

export default NavItem;
