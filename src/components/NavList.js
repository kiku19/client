import React,{useState} from "react";
import Home from "../icons/Home.js";
import NavIcons from "./NavIcons.js";

const navItems = {
  overflow: "visible",
  height: "60%",
};


const NavList = () => {
  const iconProps = {
    width: "1.3rem",
    fill: "#8e8e8e",
  };

  //Editable to change the icon and text
  const items = [
    { icon: <Home className="navIcon" {...iconProps} />, text: "Dashboard", href: "#" },
    { icon: <Home className="navIcon" {...iconProps} />, text: "Calender", href: "#" },
    { icon: <Home className="navIcon" {...iconProps} />, text: "Clients", href: "#" },
    { icon: <Home className="navIcon" {...iconProps} />, text: "Animals", href: "#" },
    { icon: <Home className="navIcon" {...iconProps} />, text: "Stocks", href: "#" },
    { icon: <Home className="navIcon" {...iconProps} />, text: "Raport & Finance", href: "#" },
    { icon: <Home className="navIcon" {...iconProps} />, text: "Settings", href: "#" },
  ];
  //Editable end

  return (
    <>
    <ul style={navItems} >
      {items.map((item, index) => (
        <NavIcons key={index} item={item} ></NavIcons>
      ))}
      {console.log("navListRender")}
    </ul>
    </>
  );
};

export default React.memo(NavList);
