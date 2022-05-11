import React, { useEffect,useContext } from 'react'
import ReactDOM from "react-dom"
import { Width } from './NavItems'    //can cause rerender

const Portal = ({children}) => {   //can cause rerender
    const div = document.createElement("div")
    div.style.fontFamily="calibri";
    div.style.display="inline-flex"
    div.style.visibility = "hidden"
    div.style.position = "fixed"
    const widthContext = useContext(Width)  //can cause rerender
    document.body.appendChild(div)
    console.log(children)
    useEffect(()=>{
        const width = div.getBoundingClientRect().width
        console.log(width)
        widthContext.setMinWidth(width)
        
    },[])
    useEffect(()=>{

document.body.removeChild(div)
    })

  return (
    ReactDOM.createPortal(children,div)
  )
}

export default React.memo(Portal)