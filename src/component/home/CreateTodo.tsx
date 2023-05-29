import { useState } from 'react';
import { MdTaskAlt, MdFavorite } from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify';

// !other import
import axios from '../../api/axios';

const CreateTodo = ({ handleRefresh }:any) => {
    const [title, setTitleValue] = useState('')
    const [contain, setContainValue] = useState('')
    const [type, setTypeValue]=useState('')

    const todoFormSubmit = async () => {
        const response = await axios.post('/todo', { title, contain, type });
        if (response?.status === 200) {
            toast.success(response?.data?.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            handleRefresh();
        } else {
            toast.error(response?.data?.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return(
        <>
            <div className='mt-3 border border-3 border-blue-300 shadow-md hover:shadow-xl rounded-lg p-4'>
                <ToastContainer/>
                <div className='flex mb-3 justify-between'>
                    <div className='flex justify-between gap-2'>
                        <MdTaskAlt className='mt-1 text-2xl text-blue-300' />
                        <input type="text" name='title' onChange={(e)=>{setTitleValue(e.target.value)}} className='w-full h-8 border border-2 border-blue-300 rounded-md text-sm px-2' placeholder='Please Enter Title'/>
                        <MdFavorite className='mt-1 text-2xl text-red-300' />
                    </div>
                </div>
                <div className='mb-3 [max-height:20vh]'>
                    <input name="contain" id="description" onChange={(e)=>{setContainValue(e.target.value)}} className='h-10 w-full border border-2 border-blue-300 rounded-md text-sm px-2' placeholder='Please Enter Todo Description'/>
                </div>
                <div className='flex justify-between gap-1'>
                    <select name="type" id="type" onChange={(e)=>{setTypeValue(e.target.value)}} className='border border-2 border-blue-300 rounded-md'>
                        <option >Select Tag</option>
                        <option value="important">Important</option>
                        <option value="non-important">Non Important</option>
                        <option value="later">Can be done Later</option>
                    </select>
                        
                    <button onClick={()=>{todoFormSubmit()}} className='[float:right] text-sm bg-blue-300  py-2 px-2 w-20 rounded-full font-semibold text-white'>Add</button>
                </div>
            </div>
        </>
    );
}

export default CreateTodo;