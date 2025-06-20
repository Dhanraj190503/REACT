import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);
    // useContext is a hook that allows you to use the context in your component
    // UserContext is the context we created in UserContext.js
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }
  return (
    <div>
        {/* <h1 className='font-bold'>Context API Mini Project</h1> */}
        <h2>Login</h2>

        <input 
        type="text" placeholder='Username' 
        onChange={(e) => setUsername(e.target.value)}
        />

        <input 
        type="password" 
        placeholder='Password' 
        onChange={(e) => setPassword(e.target.value)}
         />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login