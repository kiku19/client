import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";


const ToolTipContent = ({ container, pos, adjustment, content }) => {
  console.log(content);
  return createPortal(
    <>
      <Div pos={pos} adjustment={adjustment}>
        <Arrow pos={pos} adjustment={adjustment}></Arrow>
        <p>{content}</p>
      </Div>
    </>,
    container
  );
};

export default React.memo(ToolTipContent);

const Div = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #53a6a3;
  font-family: calibri;
  pointer-events:none;
  font-size: 1rem;
  border-radius: 13px;
  color: white;
  transition: all 0.3s;
  width: ${({ pos, adjustment }) => pos.width + 100}px;
  height: ${({ pos, adjustment }) => pos.height + 100}px;
  top: ${({ pos, adjustment }) =>
    pos.top - (pos.height + 100) / 2 + pos.height / 2}px;
  left: ${({ pos, adjustment }) =>
    pos.left + (parseInt(pos.width) + parseInt(adjustment.left))}px;

  &.toolTipTransition-enter{
    opacity:0;
  }

  &.toolTipTransition-enter-active{
    opacity:1;
    transition-delay: 2s;
  }
  &.toolTipTransition-exit {
    opacity:1;
  }
  &.toolTipTransition-exit-active {
    opacity:0;
    transition-delay: 2s;
  }
`;

const Arrow = styled.div`
  position: absolute;
  width: 10px;
  pointer-events:none;
  height: 10px;
  transition: all 0.3s;
  background-color: #53a6a3;
  transform: rotate(45deg);
  // top: ${({ pos, adjustment }) => pos.top + pos.height / 2 - 12.5}px;
  // left: ${({ pos, adjustment }) => pos.left + (parseInt(pos.width) + parseInt(adjustment.left))}px;
  top:${({pos})=>(pos.height+100)/2-5}px;
  left:-5px; 
`;
