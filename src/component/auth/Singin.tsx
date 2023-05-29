import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';

// !other import
import axios from '../../api/axios';
import { logo } from '../../assets/index';
import { authLogin } from '../../utilities/redux/Slices/auth.slice'
const SingIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmailValue] = useState('');
    const [password, setPasswordValue] = useState('');
    const isLoginData = useSelector((store: any) => store.auth);
    const loginForm = async () => {
        const { data } = await axios.post('/auth/login', { email, password });
        if (data?.statusCode === 200) {
            toast.success(data?.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            dispatch(authLogin(data.result.token))
            return navigate('/Home')

        } else {
            toast.error(data?.message, {
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
            <div className='flex justify-center'>
                <ToastContainer/>
                <div className='w-1/2 shadow-sm mt-3 bg-gray-200 p-4 rounded-lg'>
                    <div className='flex gap-4 justify-center'>
                        <img src={logo} alt="logo" width={50} height={50} />
                        <h2 className='text-center text-2xl font-semibold underline'>Sign In</h2>
                    </div>
                    <div className='mt-3'>
                        <input onChange={(e)=>{setEmailValue(e.target.value) }} type="text" placeholder='Enter Username' className='bg-white p-1 rounded-md w-full h-9 border border-2 border-black'/>
                        <input type="password" onChange={(e)=>{setPasswordValue(e.target.value) }} placeholder='Enter Password' className='mt-3 mb-3 p-1 rounded-md w-full h-9 border border-2 border-black' />
                        <center>
                            <button onClick={()=>{loginForm()}} className='p-2 rounded-md bg-blue-300 text-white text-xl'>Submit</button>
                        </center>
                    </div>
                    <p className='text-xs flex'>Don't have account? <span className='underline'><Link to='/signup'> Sign Up</Link></span></p>
                </div>
            </div>
        </>
    );
}

export default SingIn;