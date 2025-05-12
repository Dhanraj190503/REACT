import React from 'react'
import useTheme from '../Context/Theme';
// import useTheme from '../Context/Theme';
// import useTheme is used to import the useTheme function from the Theme.js file.

function ThemeBtn() {
    const {themeMode, LightTheme, DarkTheme} = useTheme();

    const onChangeBtn = (e) =>{
        const darkModeStatus = e.currentTarget.checked;
        if(darkModeStatus){
            DarkTheme();
        }else{
            LightTheme();
        }
    }
    // create a function onChangeBtn that takes an event as an argument and sets the themeMode to dark or light based on the value of the checkbox.
    // onChangeBtn is used to handle the change event of the checkbox.
  return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked = {themeMode === 'dark'}
            />
            {/* sr-only is used to hide the checkbox but still keep it accessible for screen readers. */}
            {/* peer is used to style the label based on the state of the checkbox. */}
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}

export default ThemeBtn