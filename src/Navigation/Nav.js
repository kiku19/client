import React,{createContext,useState,useRef} from 'react'
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

const[state,setState] = useState(false)

const measure = useRef(null)

const toggleFun = () => {
  
  setState((prev) => {
    return !prev
  });
};

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
