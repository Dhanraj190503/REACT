import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

let anotherElement = ' open this link';
let newElement = React.createElement(
  'a',
  { href: 'https://www.youtube.com', target: '_blank', rel: 'noopener noreferrer' },
  'YouTube',
  anotherElement,
)

createRoot(document.getElementById('root')).render(
  <>
  <App />
    {newElement}
  </>
    
)
