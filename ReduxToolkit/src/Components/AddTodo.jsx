import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../Features/Todo/TodoSlice'

function AddTodo() {
   const [input, setInput] = useState('')
   const dispatch = useDispatch()
   // useDispatch changes the value in Store using Reducer

    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo({text:input}))
        setInput('');
    }

  return (
   <form onSubmit={addTodoHandler}>

    <input 
    type="text" 
    value={input} 
    placeholder='Add Todo'
    onChange={(e) => setInput(e.target.value)} />

    <button type='submit'>Add</button>

   </form>
  )
}

export default AddTodo