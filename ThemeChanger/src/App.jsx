import React, { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';

function App() {

  const [themeMode, setThemeMode] = useState('light');
  // here themeMode is taken from the ThemeContext and setThemeMode is used to set the themeMode.
  // useState is used to create a state variable and setState is used to update the state variable.

  const LightTheme = () =>{
    setThemeMode('light');
  }
  const DarkTheme = () =>{
    setThemeMode('dark');
  }
  // here LightTheme and DarkTheme are used to set the themeMode to light and dark respectively.
  // LightTheme and DarkTheme are passed as props to the ThemeProvider.

  // Acutal change in Theme
  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark');

    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);
//  useEffect is used to perform side effects in function components.

  return (
    <ThemeProvider value={{themeMode, DarkTheme, LightTheme}}>
      {/* ThemeProvider is used to provide the context to the components. */}

       <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  {/* Theme Button */}
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  {/* Card */}
                  <Card />
              </div>
          </div>
      </div>

    </ThemeProvider>
     
  )
}

export default App
