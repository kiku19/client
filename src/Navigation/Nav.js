import React,{createContext,useState,useLayoutEffect,useRef} from 'react'
import NavItems from './NavItems';
import MenuBar from './Icon/MenuBar'
import styled from 'styled-components'


const Navstyle = styled.nav`
display:inline-flex;
flex-direction:column;
// background-color:aqua;
transition: width 0.5s;
overflow-x:hidden;
box-shadow: 2px 0.1px 5px grey;
border-radius:13px;
height:95vh;
`

const I = styled.i`
  padding: 1rem 1.8rem;
  cursor: pointer;
`;
export const Toggle = createContext()

const Nav = () => {

  const defaultSize={
    width:null,
    height:null
  }
const[state,setState] = useState(false)
const[size,setSize] = useState(defaultSize)

const measure = useRef(null)





const toggleFun = () => {
  if(!state){
      measure.current.style.width = "150px"
  }
  else{
      measure.current.style.width = "80px"
  }
  
  setState((prev) => {
    return !prev
  });
};

useLayoutEffect(()=>{
  measure.current.style.width = "80px";
  // const resize = (element) => {
  //   console.log(element);
  //   // measure.current.style.width = size.width;
  //   // measure.current.style.minWidth = size.width;
  //   console.log(element[0].contentRect.width);
  //   setSize({
  //     width: element[0].contentRect.width,
  //     height: element[0].contentRect.height,
  //   });
  // };
  // const observer = new ResizeObserver(resize).observe(measure.current);
},[])


  return (
      <Toggle.Provider value={state}>
    <Navstyle ref={measure}>
      <I onClick={toggleFun}>
        <MenuBar width="1.2rem"></MenuBar>
      </I>
      <NavItems></NavItems>
    </Navstyle>
    </Toggle.Provider>
  );
}

export default Nav
