import React from 'react'

function TodoForm({ msg, setMsg, submitTodo }) {
  return (
        <form onSubmit={submitTodo}>
          <input
            className='outline-none border-2 rounded-lg text-center border-blue-200 focus:border-blue-600 px-2 py-1 w-xl text-white'
            type="text"
            value={msg}
            placeholder='Write Todo...'
            onChange={(e) => setMsg(e.target.value)}
          />
          <button
            type='submit'
            className='bg-blue-500 border-2 border-blue-200 mx-2 px-2 py-1 rounded-lg font-bold hover:bg-blue-600 hover:border-blue-400'
          >
            ADD
          </button>
        </form>
    
  )
}

export default TodoForm