import React from 'react'
import Modal from './Modal'

const User = ({Name, Role, Email, Avatar}) => {
  return (
    <div className='bg-gray-100 flex items-center justify-center flex-col w-72 h-60 gap-y-2 p-4 m-3 '>
        <img src={Avatar} className='h-12 w-12 object-contain' alt="" />
        <p className='truncate'>Name : {Name}</p>
        <p className='truncate  text-center'>Email : {Email}</p>
        <p className='truncate'>Role : {Role}</p>
        {/* <button className='px-6 py-1 bg-cyan-400 mt-3 rounded-lg cursor-pointer active:scale-95' onClick={handleEdit}>EDIT</button> */}
        
    

    </div>
  )
}

export default User