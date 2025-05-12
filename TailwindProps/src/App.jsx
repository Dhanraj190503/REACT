import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='bg-green-700 rounded-2xl p-2.5 hover:bg-blue-800 mb-2'>Tailwind CSS</h1>

      <div className='grid grid-cols-3 gap-4'>
      <Card title="Mongolia" username="Juli" imgAdd="https://img.freepik.com/free-photo/3d-cartoon-latin-american-traditional-people_23-2151766175.jpg?ga=GA1.1.464520265.1744726104&semt=ais_hybrid&w=740"/>
      <Card title="Africa" username="Jenifer" imgAdd="https://img.freepik.com/free-photo/portrait-3d-cartoon-indigenous-person_23-2151803526.jpg?t=st=1746428559~exp=1746432159~hmac=1fd639b2eca9e76ec2693eaaccfc089aee74f2e96c3c9beebfcf6ceb235f1b45&w=826"/>
      <Card title="Poland" username="Sam" imgAdd="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034013.jpg?ga=GA1.1.464520265.1744726104&semt=ais_hybrid&w=740"/>
      <Card title="Germany" username="Robert" imgAdd="https://img.freepik.com/free-photo/3d-rendering-cartoon-character-exploring-like-forest_23-2150991451.jpg?ga=GA1.1.464520265.1744726104&semt=ais_hybrid&w=740"/>
      <Card title="America" username="Jonny" imgAdd="https://img.freepik.com/free-photo/3d-rendering-kid-character-beach_23-2151054527.jpg?ga=GA1.1.464520265.1744726104&semt=ais_hybrid&w=740"/>
      <Card title="Paris" username="Jhon" imgAdd="https://img.freepik.com/free-photo/3d-cartoon-character_23-2151021917.jpg?ga=GA1.1.464520265.1744726104&semt=ais_hybrid&w=740"/>
      </div>
      
    </>
  )
}

export default App
