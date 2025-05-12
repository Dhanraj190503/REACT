import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
  <div className='w-full h-screen flex justify-center items-center' style={{backgroundColor: color}}>
    
    <div className='fixed flex flex-wrap bottom-20 justify-center items-center px-2'>
      <div className=' flex flex-wrap justify-center items-center gap-3 shadow-lg bg-white rounded-lg p-5'>
      <button onClick={()=>setColor("red")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"red"}}>Red</button>
      <button onClick={()=>setColor("olive")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"olive"}}>Olive</button>
      <button onClick={()=>setColor("blue")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"blue"}}>Blue</button>
      <button onClick={()=>setColor("grey")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"grey"}}>Grey</button>
      <button onClick={()=>setColor("black")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer text-white' style={{backgroundColor:"black"}}>Black</button>
      <button onClick={()=>setColor("purple")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"purple"}}>Purple</button>
      <button onClick={()=>setColor("pink")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"pink"}}>Pink</button>
      <button onClick={()=>setColor("yellow")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"yellow"}}>Yellow</button>
      <button onClick={()=>setColor("white")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"white"}}>White</button>
      <button onClick={()=>setColor("green")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"green"}}>Green</button>
      <button onClick={()=>setColor("orange")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"orange"}}>Orange</button>
      <button onClick={()=>setColor("teal")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"teal"}}>Teal</button>
      <button onClick={()=>setColor("brown")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"brown"}}>Brown</button>
      <button onClick={()=>setColor("navy")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"navy"}}>Navy</button>
      <button onClick={()=>setColor("indigo")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"indigo"}}>Indigo</button>
      <button onClick={()=>setColor("coral")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"coral"}}>Coral</button>
      <button onClick={()=>setColor("gold")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"gold"}}>Gold</button>
      <button onClick={()=>setColor("salmon")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"salmon"}}>Salmon</button>
      <button onClick={()=>setColor("khaki")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"khaki"}}>Khaki</button>
      <button onClick={()=>setColor("lavender")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"lavender"}}>Lavender</button>
      <button onClick={()=>setColor("plum")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"plum"}}>Plum</button>
      <button onClick={()=>setColor("crimson")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"crimson"}}>Crimson</button>
      <button onClick={()=>setColor("chocolate")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"chocolate"}}>Chocolate</button>
      <button onClick={()=>setColor("slateblue")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"slateblue"}}>Slate Blue</button>
      <button onClick={()=>setColor("maroon")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"maroon"}}>Maroon</button>
      <button onClick={()=>setColor("orchid")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"orchid"}}>Orchid</button>
      <button onClick={()=>setColor("turquoise")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"turquoise"}}>Turquoise</button>
      <button onClick={()=>setColor("aqua")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"aqua"}}>Aqua</button>
      <button onClick={()=>setColor("fuchsia")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"fuchsia"}}>Fuchsia</button>
      <button onClick={()=>setColor("lavenderblush")} className='outline-none rounded-md px-3 py-2 shadow-lg cursor-pointer' style={{backgroundColor:"lavenderblush"}}>Lavender Blush</button>
      
      </div>
    </div>

  </div>


  )
}

export default App
