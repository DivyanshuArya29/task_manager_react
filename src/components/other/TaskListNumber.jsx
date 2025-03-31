import React from 'react';

const TaskListNumber = ({data}) => {

    return (
        <div className='flex mt-10 justify-between screen gap-5 bg-[#1C1C1C]'>
            <div className='w-[45%] rounded-xl bg-red-400 py-6 px-9'>
                <h2 className='text-2xl font-semibold bg-transparent' >{data.taskCounts.newTask}</h2>
                <h3 className='text-xl font-medium bg-transparent ' >New Task</h3>
            </div>
            <div className='w-[45%] rounded-xl bg-blue-400 py-6 px-9'>
                <h2 className='text-2xl font-semibold bg-transparent' >{data.taskCounts.completed}</h2>
                <h3 className='text-xl font-medium bg-transparent ' >Completed Task</h3>
            </div>
            <div className='w-[45%] rounded-xl bg-green-400 py-6 px-9'>
                <h2 className='text-2xl font-semibold bg-transparent' >{data.taskCounts.active}</h2>
                <h3 className='text-xl font-medium bg-transparent ' >Accepted Task</h3>
            </div>
            <div className='w-[45%] rounded-xl bg-yellow-400 py-6 px-9'>
                <h2 className='text-2xl font-semibold bg-transparent' >{data.taskCounts.failed}</h2>
                <h3 className='text-xl font-medium bg-transparent ' >Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumber