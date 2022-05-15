import React,{createContext,useState} from 'react'
import NavItems from './NavItems';
import MenuBar from './Icon/MenuBar'
import styled from 'styled-components'



export const Toggle = createContext()  //toggle Context

//Component Start
const Nav = () => 
{
  const[state,setState] = useState(false) //State to maintain context;
  
//Toggling function start
  const toggleFun = () => {           
  setState((prev) => {
    return !prev
  });
};
//Toggling function end

//JSX Start
  return (
      <Toggle.Provider value={state}>
    <Navstyle>
      <I onClick={toggleFun}>
        <MenuBar width="1.2rem"></MenuBar>
      </I>
      <NavItems></NavItems>
    </Navstyle>
    </Toggle.Provider>
  );
//JSX end

}
//Component End

export default Nav

//Styling
const Navstyle = styled.nav`
display:inline-flex;
flex-direction:column;
// background-color:aqua;
transition: width 0.5s;
overflow-x:hidden;
box-shadow: 2px 0.1px 5px #c9c9c9;
border-radius:13px;
height:95vh;
`

const I = styled.i`
  padding: 1rem 1.8rem;
  cursor: pointer;
  height:5%;
`;