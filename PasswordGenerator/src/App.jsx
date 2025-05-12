import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  //====================================================CALLBACK=========================================================
  // useCallback is used to memoize the function so that it doesn't get recreated on every render
  // let passwordGenerator = useCallback(function, [dependencies]); 

  let passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "1234567890";
    if (characters) str += "~!@#$%^&*()_+-={}[]:'<>,.;?/"
    for (let i=0; i<=length; i++){
      let random =Math.floor(Math.random() * str.length+1);
      pass += str.charAt(random);
    }

    setPassword(pass);
  },[length, numbers, characters, setPassword]);

  let CopyPasswordToClipboard =useCallback(()=>{
    // Copy the password to clipboard
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    
    // This is for mobile devices
    window.navigator.clipboard.writeText(password);
  },[password]);

//====================================================USE EFFECT=========================================================
  // useEffect is used to run the function when the dependencies change
  // useEffect(setup, dependencies?)

    useEffect(() => {
      passwordGenerator();
    // console.log("Password generated");
    // console.log(length, numbers, characters, password);
    }, [length, numbers, characters, passwordGenerator]);

  //====================================================USE REF=========================================================
  // useRef is used to create a mutable object that persists for the full lifetime of the component
  // const inputRef = useRef(initialValue);

  let passwordRef = useRef(null);

  return (
    <div className="w-full h-screen flex flex-col px-3 items-center justify-center bg-gray-800">
      <h1 className=' fixed text-4xl top-10 w-full p-4 rounded-2xl text-center font-medium bg-amber-600 border-none text-white text-shadow-2xl text-shadow-black'>Password Generator </h1>
      <div className='w-full max-w-lg mx-auto shadow-md rounded=lg px-4 my-8 text-orange-600 bg-gray-900 rounded-lg '>
        <div className='flex shadow rouneded-lg overflow-hidden mb-4 p-2'>
{/* =====================================  INPUT  ============== */}
          <input 
            type="text"
            value={password}
            placeholder='Password'
            className='w-full p-4 bg-gray-800 text-orange-600 font-medium text-lg text-center border-2 border-gray-500 rounded-lg focus:outline-none'
            readOnly
            ref={passwordRef}
            />
{/* =====================================  BUTTON  ============= */}
            <button onClick={CopyPasswordToClipboard} className='outline-none cursor-pointer bg-green-600 text-white text-lg px-3 py-0.5 shrink-0 rounded-lg mx-2'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2 mb-4'>
        <div className='flex items-center gap-x-1 '>
{/* =====================================  RANGE  ============= */}
          <input 
            type="range" 
            min={5}
            max={100}
            value = {length}
            className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}
            />
            <label htmlFor="">Length=({length})</label>
        </div>

        <div className='flex items-center gap-x-1 mx-4'>
{/* =====================================  CHECKBOX 1  ============= */}
          <input 
          type="checkbox" 
          defaultChecked={numbers}
          onChange={()=>{setNumbers((prev)=>!prev)}}
           />
           <label htmlFor="">Numbers</label>

{/* =====================================  CHECKBOX 2  ============= */}
           <input 
          type="checkbox" 
          defaultChecked={characters}
          onChange={()=>{setCharacters((prev)=>!prev)}}
           />
           <label htmlFor="">Characters</label>
        </div>
        
         

        </div>

      </div>
    </div>
  )
}

export default App
