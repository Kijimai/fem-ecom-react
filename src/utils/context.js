import React, { useState, useEffect, useContext } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNavBtn = () => {
    setIsNavOpen(!isNavOpen)
    console.log(isNavOpen)
  }

  return (
    <AppContext.Provider value={{ isNavOpen, handleNavBtn }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
