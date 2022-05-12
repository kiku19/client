import React,{useEffect} from 'react'
import ReactDOM from "react-dom"

const ToolTip = ({isMouseEntered,isMouseLeft,children}) => {
    console.log(isMouseEntered,isMouseLeft)
    const containerToolTip = document.createElement("div")
    document.body.appendChild(containerToolTip)

    // useEffect(() => {
    //   console.log(isMouseLeft)
    //   isMouseLeft && document.body.removeChild(containerToolTip);
    // });

  return ReactDOM.createPortal(children,containerToolTip)
}

export default React.memo(ToolTip)
