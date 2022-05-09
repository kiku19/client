import React, { useContext } from "react";
import styled from "styled-components";
import { Toggle } from "./Nav";
import { CSSTransition } from "react-transition-group";

const Span = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: "calibri";
  border-radius: 13px;
  margin: 1rem 0px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  & svg {
    transition: fill 1s;
  }
  &:hover svg path {
    fill: #53a6a3;
  }
  &.active svg path {
    fill: #53a6a3;
  }
`;
const I = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  font-size: 1rem;
  margin: 0 0 0 1rem;
  transform-origin: left;
  &.my-node-enter {
    opacity: 0;
    transform: scale(0);
  }
  &.my-node-enter-active {
    opacity: 1;
    transition: 300ms;
    transform: scale(1);
  }
  &.my-node-exit {
    opacity: 1;
    transform: scale(1);
  }
  &.my-node-exit-active {
    opacity: 0;
    transform: scale(0);
    transition: 300ms;
  }
`;

const NavIcon = ({ icon, text, click }) => {
  const toggle = useContext(Toggle);
  return (
    <>
        <Span
          className={"NavIcon"}
          onClick={(e) => {
            click(e);
          }}
        >
          <I>
            {React.createElement(icon, { width: "1.2rem", fill: "#8E8E8E" })}
          </I>
          <CSSTransition
            in={toggle}
            timeout={100}
            unmountOnExit
            classNames="my-node"
          >
            <P>{text}</P>
          </CSSTransition>
        </Span>
    </>
  );
};

export default NavIcon;
