import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-slate-600 text-cyan-50 p-5 text-3xl'> User  {userid} 
    </div>
  )
}

export default User

