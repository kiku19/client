import React from "react";
import Home from "./Icon/Home";
import styled from "styled-components";
import NavIcon from "./NavIcon";
import CustomScrollDiv from "./Scroll";
import WidthCalc from "./WidthCalc";
import ToolTip from "./ToolTip";

//Modal : Nav-Modal
const items = [
  { icon: Home, text: "Home", content: "Home" },
  { icon: Home, text: "Control", content: "Control" },
  { icon: Home, text: "Animal", content: "Animal" },
  { icon: Home, text: "Subject", content: "Subject" },
  { icon: Home, text: "Chat", content: "Chat" },
  { icon: Home, text: "About", content: "About" },
  { icon: Home, text: "Client", content: "Client" },
];
//Modal end

//Component Start
const NavItem = () => {
  return (
    <WidthCalc>
      <CustomScrollDiv>
        <Ul className="scroll-host">
          <ToolTip name={"NavIcon"}>
            {items.map(({ icon, text, content }) => (
              <NavIcon
                key={text}
                icon={icon}
                text={text}
                content={content}
              ></NavIcon>
            ))}
          </ToolTip>
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
