import React from 'react'

function TodoList({ todos, editTodoId, editMsg, setEditTodoId, setEditMsg, editTodo, deleteTodo}) {
  return (
        <div className='my-4 mx-2'>
          {todos.map((todos) => (
            <div key={todos.id}>
              <div className='flex justify-between items-center w-2xl bg-green-100 py-1 px-2 text-green-900 font-bold text-lg rounded-md my-2 text-left border-3 border-blue-800'>

                {/* ================= Input Field ================= */}
                <input
                  type="text"
                  value={editTodoId === todos.id ? editMsg : todos.todoMsg} // ✅ useState: editMsg (if editing), else show original todo
                  className='outline-none bg-transparent text-black'
                  readOnly={editTodoId !== todos.id} // ✅ Only editable when this todo is being edited
                  onChange={(e) => setEditMsg(e.target.value)} // ✅ Function: updates editMsg when typing
                />

                <div>
                  {/* ================= Edit / Save Button ================= */}
                  <button
                    className='hover:bg-green-300 p-1 rounded-xl cursor-pointer'
                    onClick={() => {
                     if (editTodoId !== todos.id) {  // ✅ Reverse logic: Start editing when IDs don't match
                        // ✅ Function: Start editing this todo
                        setEditTodoId(todos.id);        // ✅ useState: sets which todo is being edited
                        setEditMsg(todos.todoMsg);      // ✅ useState: pre-fills edit input
                      } else {
                        // ✅ Function: Save the edited todo
                        editTodo(todos.id, editMsg);    // ✅ Function: updates the todo in the list
                        setEditTodoId(null);            // ✅ useState: exits edit mode
                        setEditMsg('');                 // ✅ useState: clears the input
                      }
                    }}
                  >
                    {editTodoId === todos.id ? '💾' : '✏️'} 
                  </button>

                  {/* Delete Button */}
                  <button
                    className="hover:bg-green-300 p-1 rounded-xl cursor-pointer"
                    onClick={() => deleteTodo(todos.id)}
                  >
                    ❌
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
  )
}

export default TodoList