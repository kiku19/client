import React from "react";
import styled from "styled-components"

const P = styled.p`
  display: "flex",
  marginLeft: "25px",
  alignItems: "center",
  color: "black",
  fontWeight: "bold",
  fontSize: "1rem",
  overflow: "hidden",
  whiteSpace: "nowrap",
`
const NavText = ({ text }) => {
  return (
    <>
      <P>
        {text}
      </P>
      {console.log("navText rendered")}
    </>
  );
};

export default React.memo(NavText);

