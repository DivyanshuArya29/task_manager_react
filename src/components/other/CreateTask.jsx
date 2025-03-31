import React, { useContext , useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData, setUserData ] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})


    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({taskTitle,taskDescription,taskDate,category, active:false, newTask:true, failed:false, completed:false})

        const data = userData  

        data.forEach(function(elem){
            if(asignTo == elem.firstName){
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })

        setUserData(data)
        console.log(data);
        
        
        setAsignTo('')
        setCategory('')
        setTaskDate('')
        setTaskDescription('')
        setTaskTitle('')

    }
    return (
        <div className='p-5 mt-5 bg-[#1c1c1c] rounded'>
                <form onSubmit={(e)=>{
                    submitHandler(e) }} className='p-5 flex flex-wrap w-full items-start justify-between rounded-lgq'>
                    <div className='w-1/2 '>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5' >Task Title</h3>
                            <input 
                            value={taskTitle}
                            onChange={(e)=>{
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent' type="text" placeholder='Enter your Task Title' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mt-2 mb-0.5'>Date</h3>
                            <input 
                            value={taskDate}
                            onChange={(e)=>{
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent' type="date" />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mt-2 mb-0.5'>Asign to</h3>
                            <input
                            value={asignTo}
                            onChange={(e)=>{
                                setAsignTo(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent' type="text" placeholder='Employee Name' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mt-2 mb-0.5'>Category</h3>
                            <input
                            value={category}
                            onChange={(e)=>{
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent' type="text" placeholder='Design,Dev,etc' />
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5' >Description</h3>
                        <textarea
                        value={taskDescription}
                        onChange={(e)=>{
                            setTaskDescription(e.target.value)
                        }}
                        className='w-full h-44 text-sm rounded outline-none border-[1px]' name="" id="" col="30" row="10"></textarea>
                        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded mt-4 w-full' >Create Task</button>
                    </div> 
                </form>
            </div>
    );
};

export default CreateTask ;