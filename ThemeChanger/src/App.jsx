import React, { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';

function App() {

  const [themeMode, setThemeMode] = useState('light');

  const LightTheme = () =>{
    setThemeMode('light');
  }
  const DarkTheme = () =>{
    setThemeMode('dark');
  }

  // Acutal change in Theme

  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark');

    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, DarkTheme, LightTheme}}>

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
