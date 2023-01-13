import React, { useEffect, useState } from 'react'
import userData from '../Components/userData'
import UserContext from './UserContext'


const UserState = (props) => {

  const [Data, setData] = useState([])


useEffect(() => {
  setData(userData)
}, [])

useEffect(() => {
  console.log("Data is : ", Data);

  }, [Data])


  const [getId, setGetId] = useState(null)
  


    let [isOpen, setIsOpen] = useState(false)
    const [updateData, setUpdateData] = useState({
      Name:"a",
      Email:"v",
      Skill:"v"
     })

    //  const toggleModal = (id) => {
    //   console.log(id)
    //   setIsOpen(true)
    //  }
  
    // const handleChangge
  return (
    <UserContext.Provider value={{isOpen, setIsOpen, updateData, setUpdateData, Data, setData, getId, setGetId}} >
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState