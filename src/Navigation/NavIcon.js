import React, {useContext} from "react";
import styled from "styled-components";
import { Toggle } from "./Nav";
import { CSSTransition } from "react-transition-group";
import Portal from "./Portal";
import { Width } from "./NavItems";

const NavIcon = ({ icon, text, click }) => {
  const toggle = useContext(Toggle);
  const maxWidth =  useContext(Width).maxWidth
  if(maxWidth)
 
  return (
    <>
      <Span
        className={"NavIcon"}
        onClick={(e) => {
          click(e);
        }}
      >
        <I>{React.createElement(icon, { width: "1.2rem", fill: "#8E8E8E" })}</I>
        <CSSTransition
          in={toggle}
          timeout={300}
          unmountOnExit
          classNames="toggle"
          >
          <Div className="toggle-base" maxWidth={maxWidth}>
            <P>{text}</P>
          </Div>
        </CSSTransition>
        {(maxWidth==="60px") && <Portal><P>{text}</P></Portal>}
      </Span>
    </>
  );
};

export default NavIcon;
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
  font-size: 0.9rem;
  margin: 0 0 0 1rem;
  transform-origin: left;
`;
const Div = styled.div`
  &.toggle-enter {
    animation-name: fade-in;
    animation-duration: 400ms;
  }
  &.toggle-exit {
    animation-name: fade-out;
    animation-duration: 400ms;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      width: 0px;
    }
    to {
      opacity: 1;
      width: ${({maxWidth})=>maxWidth}px;
    }
  }
  @keyframes fade-out {
    from {
      opacity: 1;
      width: ${({maxWidth})=>maxWidth}px;
    }
    to {
      opacity: 0;
      width: 0px;
    }
  }
`;
