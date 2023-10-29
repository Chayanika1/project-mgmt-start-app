import React from 'react';
import noProjectName from '../Assets/no-project.png'
import Button from './Button';
const NoProjectSelected = ({onStartAddProject}) => {
    return (
        <div className='mt-24 text-center w-2/3'>
            <img src={noProjectName}alt="empty task list"className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>no project selected</h2>
            <p className='text-stone-400 mb-4'>select a project or get started a new one</p>
            <p className='mt-8'>
                <Button onClick={onStartAddProject}>Create New Project</Button>
            </p>
            
        </div>
    );
};

export default NoProjectSelected;