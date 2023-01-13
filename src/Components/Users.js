import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
import Modal from './Modal'
import User from './User'


const Users = () => {

    const userContext = useContext(UserContext)
    // const [Data, setData] = useState([])

    // const userData = async () => {
        
    //     const data = await fetch("https://random-data-api.com/api/v2/users?size=4")
    //     const res = await data.json();
    //     setData(res)
        
    // }

    // useEffect(() => {
    //     userContext
    // }, [])

    // useEffect(() => {
    // console.log(Data);
    // console.log("a : ", userContext);
    // }, [Data])
    
const toggle = (id) => {
  userContext.setIsOpen(true)
userContext.setGetId(id)

 console.log(id)
}


  return (<>
  
    <div className='flex  m-6'>


{userContext.Data.map( (user, id) => (<div className='flex flex-col gap-6' key={id}>
        <User Name={user.Name}  Email={user.Email} Role={user.Role} Avatar={user.Avatar} handleEdit={() => console.log(id)}/>
        <Modal toggleModal={() => toggle(id)}/>


        </div>))}


    </div>
    </>
  )
}

export default Users