import React, { useState } from 'react';

const NewTask = ({onAdd}) => {
    const[enteredTask,setEnteredTask]=useState('');
    const handleChange=(e)=>{
        setEnteredTask(e.target.value)

    }
    const handleClick=()=>{
        //validation
        if(enteredTask.trim()===''){
            return;
        }
        onAdd(enteredTask)

        setEnteredTask('');

    }
    return (
        <div className='flex items-center gap-4'>
            <input onChange={handleChange}type='text' value={enteredTask} className='w-64 px-2 py-1 rounded-sm bg-stone-200'/>
            <button onClick={handleClick}className='text-stone-700 hover:text-stone-950'>Add Task</button>
            
        </div>
    );
};

export default NewTask;