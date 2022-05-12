import React from "react";
import Home from "./Icon/Home";
import styled from "styled-components";
import NavIcon from "./NavIcon";
import CustomScrollDiv from "./Scroll";
import WidthCalc from "./WidthCalc";

//Modal : Nav-Modal
const items = [
  { icon: Home, text: "Home" },
  { icon: Home, text: "Control" },
  { icon: Home, text: "Animal" },
  { icon: Home, text: "Subject" },
  { icon: Home, text: "Chat" },
  { icon: Home, text: "About" },
  { icon: Home, text: "Client" },
];
//Modal end

//Component Start
const NavItem = () => {
  return (
    <WidthCalc>
      <CustomScrollDiv>
        <Ul className="scroll-host">
          {items.map(({ icon, text }) => (
            <NavIcon key={text} icon={icon} text={text}></NavIcon>
          ))}
        </Ul>
      </CustomScrollDiv>
    </WidthCalc>
  );
};
//Component end
export default NavItem;

//Styling
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
