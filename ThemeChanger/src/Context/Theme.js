import { createContext, useContext } from "react"; 

export const ThemeContext = createContext({
    themeMode: 'light',
    DarkTheme: () =>{},
    LightTheme: () =>{},
});
// createContext is used to create a context object.

export const ThemeProvider = ThemeContext.Provider;
// ThemeProvider is used to provide the context to the components.

export default function useTheme(){
    return useContext(ThemeContext)
}
// useTheme is a custom hook that allows us to use the context in our components.
// useContext is used to consume the context in the components.