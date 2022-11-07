import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({children}) => {
    const [pokaziMenu, setPokaziMenu] = useState(false)
    const [kontakt, setkontakt] = useState(false)
    const [eng, seteng] = useState(false)
  return (
    <Context.Provider
      value={{
       pokaziMenu,
       kontakt,
       eng,
       seteng,
       setkontakt,
       setPokaziMenu,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);