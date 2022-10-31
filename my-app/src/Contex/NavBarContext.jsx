import  { createContext, useContext, useState } from 'react'

const NavBarContext = createContext([]);
export const useNavBarContext = () => useContext(NavBarContext)

export function NavBarContextProvider({children}) {

    const [navBarState, setNavBarState] = useState(false);

 
    return (
        <NavBarContext.Provider value = {{
            setNavBarState,
            navBarState
          }}>
              {children}
      
        </NavBarContext.Provider>
    )

}



