import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// !other import 
import CreateTodo from './CreateTodo';
import Card from './Card';
import axios from '../../api/axios';

type ITodo = {
    _id: string,
    title: string,
    contain: string,
    type: string,
    like: boolean
}


// create api for fav tag and show in menu and tag count total

const ListTodo = () => {
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => {
        setRefresh(!refresh);
    };
    const [data, setDataValue] = useState([]);
    const navigate = useNavigate();
    const isLoginData = useSelector((store: any) => store.auth);
    const isLogin = isLoginData?.isLogin
    axios.defaults.headers.common.Authorization = isLoginData?.jwt;
    
    const getTodo = async () => {
        const response = await axios.get('/todo');
        setDataValue(response?.data?.data)
    }

    useEffect(() => {
        if (!isLogin) navigate('/')
        getTodo();
    },[refresh])

    return(
        <>
            <div className='mt-3'>
                <div className='px-4 grid md:grid-cols-5 gap-2 '>
                    <CreateTodo handleRefresh={handleRefresh} />
                    {data.map((item:ITodo) => (
                        <Card {...item} key={item._id} handleRefresh={handleRefresh} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ListTodo;