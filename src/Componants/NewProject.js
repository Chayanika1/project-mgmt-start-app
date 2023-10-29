import React, { useRef } from 'react';
import Input from './Input';
import ErrorModal from './ErrorModal';

const NewProject = ({onAdd,onCancel}) => {
   const title= useRef();
   const description = useRef();
   const dueDate=useRef();
   const modal = useRef();
   function handleSave(){
    const entertedTitle = title.current.value;
    const enetredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    //validation
      if(entertedTitle.trim()===''|| enetredDescription.trim()===''|| enteredDueDate.trim()===''){
        //show the error modal
        modal.current.open();
        return;
        
      }
    onAdd({
        title:entertedTitle,
        description:enetredDescription,
        dueDate:enteredDueDate

    })


   }
    return (
        <>
        <ErrorModal ref={modal}>
        <h2>Invalid Input</h2>
        <p>Oops..Like you forgot to enter a value</p>
        <p>Please make sure you provide a valid value</p>
        </ErrorModal>
        <div className='w-[35rem]mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li><button className='text-stone-800 hover:text-stone-950'onClick={onCancel}>Cancel</button></li>
                <li><button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
            </menu>
            <div>
                <Input type='text' label="title" ref={title}/>
                <Input ref={description} label="description"textarea/>
                <Input type='date' ref={dueDate} label="due date"/>
            </div>
            
        </div>
        </>
    );
};

export default NewProject;