import { useState } from 'react'
import './App.css'
import { Increment, AddbyAmount, Decrement } from './Slice/Slice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const [input, setInput] = useState('');

 const dispatch = useDispatch()

  const SbtValue =(e) =>{
      e.preventDefault();
      // setCount(AddbyAmount({text:input}));
      dispatch(AddbyAmount({text: input}));
      setInput('');
  }

  return (
    <>
      <h1 className='text-red-500 font-bold border-2 border-white p-4 rounded-2xl '>Counter App using Redux Toolkit </h1>

        <div className='flex flex-wrap justify-center align-center m-2'>
            <div className='w-md h-full p-4 border-green-300 border-2 rounded-2xl'>
                  <div className='m-3 '>
                    <label  className='border-2 border-orange-500 p-2 rounded-3xl text-xl font-bold m-2' htmlFor="">{count}</label>
                  </div>
                  <br />

                  <div className='flex flex-wrap gap-2 justify-evenly align-center tracking-wide'>
                    <button onClick={() => dispatch(Increment())} className='hover:bg-green-500 p-3 rounded-md border-3 border-gray-600 hover:border-green-900 hover:border-3'>(+) Increment by 1</button>
                    <button onClick={() => dispatch(Decrement())} className='hover:bg-red-500 p-3 rounded-md border-3 border-gray-600 hover:border-red-900 hover:border-3'>(-) Decrement by 1</button>
                  </div>

                  <div className='m-2 flex flex-wrap gap-2 justify-between align-center tracking-wide mt-3 border-t-2 border-amber-100 p-2'>
                    <label className='text-center w-sm text-amber-300 font-bold' htmlFor="">Add Number by Inserting value</label>
                    <form onSubmit={SbtValue}>
                      <input 
                      type="number"
                      value={input}
                      className='p-2.5 text-lg border-3 outline-none rounded-md border-gray-600 focus:border-blue-500 w-40 mx-4'
                      placeholder='Input Number'
                      onChange={(e)=>setInput(Number(e.target.value))} 
                      />
                    <button className='hover:bg-blue-500 p-3 rounded-md border-3 border-gray-600 hover:border-blue-900 hover:border-3'>Add by Input Value</button>
                    </form>
                  </div>
              </div>

        </div>
    
    </>
  )
}

export default App
