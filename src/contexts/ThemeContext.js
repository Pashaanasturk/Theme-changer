import { createContext, useContext } from "react";


//we can pass initial values to the context it can be normal variables or methods

export const ThemeContext= createContext({
    themeMode:"light",
    darkTheme: ()=> {},
    lightTheme: ()=>{}
});

export const ThemeProvider= ThemeContext.Provider;

//we have done our context work in single file with this syntax

// we r creating our custom hook 
export default function useTheme()
{
    return useContext(ThemeContext);
}