import { MdTaskAlt, MdOutlineFavoriteBorder, MdFavorite } from 'react-icons/md'
import axios from '../../api/axios'
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'
import * as React from 'react'

type IData = {
    _id:string,
    title: string,
    contain: string,
    type: string,
    like: boolean
    handleRefresh: any
}

const Card = ({ _id, title, contain, type, like, handleRefresh }: IData) => {
    const [setLike, setLikeValue] = useState(like);
    const updateTodo = async (id:string) => { 
        setLikeValue(!setLike)
        const response = await axios.patch(`/todo?id=${id}&like=${setLike}`) 
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
    }

    const deleteTodo = async (id: string) => {
        const result = await axios.delete(`/todo?id=${id}`)
        if (result?.status === 200) {
            toast.error(result?.data?.message, {
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
        }
    }
    return(
        <>
            <div className='mt-3 border border-1 border-gray-200 shadow-md hover:shadow-xl rounded-lg p-4 grid grid-cols-none'>
                 <ToastContainer/>
                <div className='flex mb-3 justify-between'>
                    <div className='flex gap-2'>
                        <MdTaskAlt className={`${type === 'non-important'? 'text-green-300': type === 'important'?'text-red-300':type === 'later'? 'text-yellow-300' :''} text-sm`} />
                        <p className='text-sm font-semibold'> {title} </p> 
                    </div>
                    {
                        (like === true) ? (
                            <button onClick={() => { updateTodo(_id) }}><MdFavorite className=' text-red-300' /></button>)
                            : (<button onClick={() => { updateTodo(_id) }}><MdOutlineFavoriteBorder /></button>)
                    }
                </div>
                <div className='mb-3 [max-height:20vh]'>
                    <p className='[overflow-x: hidden;] text-sm'>{contain}</p>
                </div>
                <div className='flex justify-between gap-2 mt-3'>
                    <button className={`${type === 'non-important'? 'bg-green-300': type === 'important'?'bg-red-300':type === 'later'? 'bg-yellow-300' :''} text-sm text-white px-5 p-2 rounded-md font-semibold`}>{type}</button>
                    <button onClick={()=>{deleteTodo(_id)}} className='text-sm bg-blue-300 p-2 px-6 rounded-md font-semibold text-white'>Delete</button>
                </div>
            </div>
        </>
    );
}

export default Card;
