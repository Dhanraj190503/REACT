// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import Layout from './Layout'
// import Home from './components/Home/Home'
// import About from './components/About/About'
// import Contact from './components/Contact/Contact'
// import './index.css'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import User from './components/User/User'
// import Github from './components/Github/Github'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />  {/* These are dynamic route that will match any URL that starts with /products */}
//       <Route path='github' element={<Github />} />

//       <Route path='user/:userid' element = {<User />}/> {/* This is a dynamic route use to match the URL /products/:id */}
//     </Route>
//     )
// );
// // The createBrowserRouter function creates a router object that can be used with the RouterProvider component
// // The router object contains the routes and their corresponding components
// // The createBrowserRouter function takes an array of route objects as an argument
  

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />      {/* RouterProvider is a component that provides the router to the app */}
//                     {/* It takes a router object as a prop and renders the appropriate route based on the current URL */}
//                     {/* The router object is created using the createBrowserRouter function */}        
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
