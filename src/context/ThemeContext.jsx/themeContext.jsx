import { createContext, useEffect, useState } from 'react'
import PropTypes from "prop-types"
export const ThemeContext = createContext();
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = ()=>{
        setTheme((prevTheme) => prevTheme === "light"? "dark" : "light")
    }

    useEffect(() => {
      document.body.classList.add(theme == "light" ? "light" : "dark")
      document.body.classList.remove(theme == "light" ? "dark" : "light")

    }, [theme])
    
  return (
 <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
 </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes ={
    children: PropTypes.node,
}
export default ThemeProvider
