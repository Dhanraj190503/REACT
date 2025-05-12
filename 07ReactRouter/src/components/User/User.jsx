import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
let {userid} = useParams()

  return (
    <div className='text-center bg-gray-600 text-2xl p-4 text-amber-200 font-bold'>User: {userid}</div>
  )
}

export default User