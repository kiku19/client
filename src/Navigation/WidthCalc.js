//This component accepts children abd provides two context, one getMinWIdth which runs in the portal to get the width of the individual
//two minWidth sets the maximum width of the collected.
import React,{useState,createContext,useCallback,useEffect} from 'react'

export const Width = createContext();

const WidthCalc = ({children}) => {

  const widthArray = []; //to find the maximum width 

  const [minWidth, setMinWidth] = useState("60px");
  
  const getMinWidth = useCallback((width) => {
    widthArray.push(width);
  }, []);

  useEffect(() => {
    setMinWidth(Math.max(...widthArray));
  }, []);

  return (
    <Width.Provider value={{getMinWidth,minWidth}}>
      {children}
    </Width.Provider>
  )
}

export default WidthCalc

//getMinWIdth function gets 