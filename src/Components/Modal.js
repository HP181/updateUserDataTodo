import React, { useContext, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import UserContext from '../Context/UserContext'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({toggleModal}) => {


    

 const handleModal = useContext(UserContext)


   const refName = useRef(null)
   const refEmail = useRef(null)
   const refSkill = useRef(null)



   const handleClose = (e) => {
    e.preventDefault();
 

//   handleModal.Data.filter((user => {
//      console.log("isd", user.Name)
//      console.log("isd n", handleModal.Data[handleModal.getId].Name)

// if (user.Name == handleModal.Data[handleModal.getId].Name) {
//   return handleModal.setData({...handleModal.Data, Name:refName.current.value, Email:refEmail.current.value, Role:refSkill.current.value})
// } else {
//   return user
  
// }
    
//   }))

if((refName.current.value && refEmail.current.value && refSkill.current.value).match(/^\s+$/) == null && (refName.current.value && refEmail.current.value && refSkill.current.value)){

  handleModal.setData(
    handleModal.Data.map(user => {
      if(user.Name === handleModal.Data[handleModal.getId].Name){
          return {...user, Name:refName.current.value, Email:refEmail.current.value, Role:refSkill.current.value}
      }
      return user;
    })  
  )
  
  toast.success("Data Updated Successfully", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
       handleModal.setIsOpen(false) 


}else{
  toast.error("Please enter valid Input", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  refName.current.value = ""
  refEmail.current.value = ""
  refSkill.current.value = ""
}



// Input.match(/^\s+$/) == null && Input

   }





  return (
        <div className='mt-5 '>
          <div className=" inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={toggleModal}
              className="rounded-md bg-black bg-opacity-20 px-6 py-2 text-sm  text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 font-bold"
            >
              Edit
            </button>
          </div>

      <Transition appear show={ handleModal.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() =>  handleModal.setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
       
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                   
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                   
                   <p> ENTER YOUR INPUT</p>
                  </Dialog.Title>

                 
                  <div className="mt-4 space-y-1 ">
                 
                    <div>
                    <p>Name</p>
                    <input type="text" name="Name"   ref={refName} required  className='w-full h-8 px-4 py-2 m-2 rounded-lg border-2 border-black bg-gray-100 focus:outline-none'/>
                    </div>

                    <div>
                    <p>Email</p>
             
                    <input type="email" name="Email"  ref={refEmail}  required className='w-full h-8 px-4 py-2 m-2 rounded-lg border-2 border-black bg-gray-100 focus:outline-none'/>
                    </div>

                    <div>
                    <p>Role</p>
                    <input type="text" name="Skill"   ref={refSkill} required  className='w-full h-8 px-4 py-2 m-2 rounded-lg border-2 border-black bg-gray-100 focus:outline-none'/>
                    </div>
                  </div>
                
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleClose}
                    >
                      Got it, thanks!
                        
                    </button>
                  </div>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

    </div>
  )
}

export default Modal