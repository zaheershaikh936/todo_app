import { MdDateRange } from 'react-icons/md'

const TopMenu = ()=>{
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    return(
        <>
            <div className='rounded-lg bg-gray-200 p-2 mb-3'>
                <div className='flex justify-between'>
                    <div className='flex gap-3 mt-2'>
                        <h2 className='text-lg font-semibold text-slate-600'>Todo App </h2>
                        <h2 className='text-lg font-semibold text-slate-600'> Project </h2>
                    </div>
                    <div className='flex gap-3 mt-2'>
                        <MdDateRange className='text-2xl text-slate-600'/>
                        <h2 className='text-xl font-semibold text-slate-600'>{yyyy + '/' + mm + '/' + dd  }</h2>
                    </div>
                    <div>
                        <div className='p-3 text-slate-600 text-md font-semibold hover:underline'>
                            Add New TODO
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopMenu