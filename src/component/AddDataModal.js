import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodoList } from "../redux/action";


const AddDataModal = (props) => {
    const [inputData, setInputData] = useState('')



    const onclickButton = () => {
        props.dispatch(addTodoList(inputData))
        setInputData('')
        props.setModelOpen(false)
    }

    return (
        <div className="bg-black fixed inset-1 bg-opacity-20 backdrop-blur-md flex flex-col justify-center items-center  ">
            <div className=" rounded-3xl bg-customRed  w-1/9 px-10 py-10 h-fit flex justify-evenly flex-col" >
                <input onChange={(e) => setInputData(e.target.value)} value={inputData} type="text" style={{ fontFamily: 'cursive' }} className="px-1 py-1 text-3xl rounded-lg max-h-fit text-black bg-white block w-full md:min-w-96 max-w-72" />
                <div className="flex justify-around">
                    {
                        inputData ? <button style={{ fontFamily: 'cursive' }} onClick={() => onclickButton()}
                            className="rounded-lg bg-stone-950 mt-5 text-2xl text-white  py-2 px-3 min-w-fit content-center text-center hover:bg-green-600 " >Add Data</button>
                            : <button style={{ fontFamily: 'cursive' }}
                                className="rounded-lg bg-opacity-60 bg-stone-950 mt-5 text-2xl text-white  py-2 px-3 min-w-fit content-center text-center hover:bg-red-600 " >Add Data</button>
                    }

                    <button style={{ fontFamily: 'cursive' }} onClick={() => props.setModelOpen(false)}
                        className="rounded-lg bg-stone-950 mt-5 text-2xl text-white  py-2 px-3 min-w-fit content-center text-center hover:bg-red-600" >Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default AddDataModal



































// import { useState } from 'react'
// import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


// export default function AddDataModal() {
//     const [open, setOpen] = useState(true)

//     return (
//         <Dialog open={open} onClose={setOpen} className="relative z-10">
//             <DialogBackdrop
//                 transition
//                 className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
//             />

//             <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//                 <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//                     <DialogPanel
//                         transition
//                         className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
//                     >
//                         <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//                             <div className="sm:flex sm:items-start">
//                                 <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
//                                     <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
//                                 </div>
//                                 <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
//                                     <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
//                                         Deactivate account
//                                     </DialogTitle>
//                                     <div className="mt-2">
//                                         <p className="text-sm text-gray-500">
//                                             Are you sure you want to deactivate your account? All of your data will be permanently removed.
//                                             This action cannot be undone.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                             <button
//                                 type="button"
//                                 onClick={() => setOpen(false)}
//                                 className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
//                             >
//                                 Deactivate
//                             </button>
//                             <button
//                                 type="button"
//                                 data-autofocus
//                                 onClick={() => setOpen(false)}
//                                 className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </DialogPanel>
//                 </div>
//             </div>
//         </Dialog>
//     )
// }