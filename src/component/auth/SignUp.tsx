import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

// !other import
import { logo } from '../../assets/index'
import { useState } from 'react';
import axios from '../../api/axios'

const SingUp = () => {
    const [email, setEmailValue] = useState('');
    const [password, setPasswordValue] = useState('')
    const singUpForm = async () => { 
        const response = await axios.post('/auth', { email, password })
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
    }

    return(
        <>
            <div className='flex justify-center'>
                <div className='w-1/2 shadow-sm mt-3 bg-gray-200 p-4 rounded-lg'>
                    <div className='flex gap-4 justify-center'>
                        <img src={logo} alt="logo" width={50} height={50} />
                        <h2 className='text-center text-2xl font-semibold underline'>Sign Up</h2>
                    </div>
                    <div className='mt-3'>
                        <input type="text" required onChange={(e)=>{setEmailValue(e.target.value)}} placeholder='Enter Username' className='bg-white p-1 rounded-md w-full h-9 border border-2 border-black'/>
                        <input type="password" required placeholder='Enter Password' onChange={(e)=>{setPasswordValue(e.target.value)}} className='mt-3 mb-3 p-1 rounded-md w-full h-9 border border-2 border-black' />
                        <center>
                            <button type='button' onClick={()=>{singUpForm()}} className='p-2 rounded-md bg-blue-300 text-white text-xl'><ToastContainer /> Submit</button>
                        </center>
                    </div>

                    <p className='text-xs flex'>Already have account ? <span className='underline'><Link to='/'> Sign In</Link></span></p>
                </div>
            </div>
        </>
    );
}

export default SingUp;