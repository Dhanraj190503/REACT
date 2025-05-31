import { useEffect, useState } from 'react';
import './App.css';
import { TodoContextProvider } from './Context/TodoContext';
import TodoForm from '../src/Component/TodoForm';
import TodoList from '../src/Component/TodoList';

function App() {
  const [todos, setTodo] = useState([]);                  // ✅ All todos
  const [msg, setMsg] = useState('');                     // ✅ Input text for new todo
  const [editTodoId, setEditTodoId] = useState(null);     // ✅ ID of todo being edited
  const [editMsg, setEditMsg] = useState('');             // ✅ Message being edited

  // useState is a React Hook that lets you add React state to function components.
  // const [variable, setVariable] = useState(initialValue);

//================================  fetch (get) Todo from Local =========================

useEffect(()=>{
 const getTodos = JSON.parse(localStorage.getItem('Todos'));
if (getTodos && getTodos.length>0){
  setTodo(getTodos)
}
},[])
  // ============================= Save (set) Todo in Local =========================
  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(todos));
    // ✅ Save todos to local storage
    // "stringify" converts the array to a string 
  },[todos])

  // ============================= Add Todo =========================
  const addTodo = (msg) => {
    const newTodo = {
      id: Date.now(),
      todoMsg: msg,
      completed: false,
    };
    setTodo((prev) => [...prev, newTodo]);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    if (!msg.trim()) return;
    addTodo(msg.trim());
    setMsg('');
  };

  // ============================= Delete Todo =========================
  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((CheckTodo) => CheckTodo.id !== id));
  };

  // ============================= Edit Todo =========================
  const editTodo = (id, updatedMsg) => {
    setTodo((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, todoMsg: updatedMsg } : todo
      )
    );
  };

  return (
    <TodoContextProvider value={{ todos, addTodo, editTodo, deleteTodo }}>
      <h1>Todo Project Self Practice</h1>
      <div className='w-full max-w-3xl mx-auto shadow-md rounded-lg m-3 px-4 py-3 text-white'>

        {/* ================== Add Todo Form ================== */}
        {/* <form onSubmit={submitTodo}>
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
        </form> */}

        <TodoForm msg={msg} setMsg={setMsg} submitTodo={submitTodo} />
        {/* ================== Todo List ================== */}
       <TodoList
        todos={todos}
        editTodoId={editTodoId}
        editMsg={editMsg}
        setEditTodoId={setEditTodoId}
        setEditMsg={setEditMsg}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />


        {/* <div className='my-4 mx-2'>
          {todos.map((todos) => (
            <div key={todos.id}>
              <div className='flex justify-between items-center w-2xl bg-green-100 py-1 px-2 text-green-900 font-bold text-lg rounded-md my-2 text-left border-3 border-blue-800'> */}

                {/* ================= Input Field ================= */}
                {/* <input
                  type="text"
                  value={editTodoId === todos.id ? editMsg : todos.todoMsg} // ✅ useState: editMsg (if editing), else show original todo
                  className='outline-none bg-transparent text-black'
                  readOnly={editTodoId !== todos.id} // ✅ Only editable when this todo is being edited
                  onChange={(e) => setEditMsg(e.target.value)} // ✅ Function: updates editMsg when typing
                />

                <div> */}
                  {/* ================= Edit / Save Button ================= */}
                  {/* <button
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
                  </button> */}

                  {/* Delete Button */}
                  {/* <button
                    className="hover:bg-green-300 p-1 rounded-xl cursor-pointer"
                    onClick={() => deleteTodo(todos.id)}
                  >
                    ❌
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div> */}

      </div>
    </TodoContextProvider>
  );
}


export default App;