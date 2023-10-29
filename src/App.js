import logo from './logo.svg';
import './App.css';
import ProjectSideBar from './Componants/ProjectSideBar';
import NewProject from './Componants/NewProject';
import NoProjectSelected from './Componants/NoProjectSelected';
import { useState } from 'react';
import SelectedProject from './Componants/SelectedProject';

function App() {
  const[projectState,setProjectState]=useState({
    selectedProjectId:undefined,//because here we didnot add or selected any project yet. but we can add or select new project
    projects:[],
    tasks:[]
  })//here we are manage objet as a state
   function handleAddTask(text){
    setProjectState(prevState=>{
      const taskId = Math.random()

      const newTask = {
        text:text,
        id:taskId,
        projectId : prevState.selectedProjectId,
        
        

      }
      return{
        ...prevState,
        tasks:[...prevState.tasks,newTask]
      }

    })


   }
   function handleDeleteTask(id){
    setProjectState(prevState=>{
      return{
        ...prevState,
        tasks:prevState.tasks.filter((task)=>task.id !==id)
      }
    })

   }
  function handleSatrtAddProject(){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:null//here we use null because here we now adding a new project
      }
    })
    
  }
  function handleAddProject(projectData){
    setProjectState(prevState=>{
      const newProject = {
        ...projectData,
        id:Math.random().toString()
        
        

      }
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject]
      }

    })
  }
  const handleCancelProject=()=>{
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined
      }
    })

  }
  const handleDeleteButton=()=>{
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:prevState.projects.filter((project)=>project.id !==prevState.selectedProjectId)
      }
    })

  }
  const handleSelectProject=(id)=>{
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:id
      }
    })

   }

  
  //console.log(projectState)
  // let content;
  const selectedProject = projectState.projects.find(project=>project.id===projectState.selectedProjectId)
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteButton} onAddTask={handleAddTask}onDeleteTask={handleDeleteTask} tasks={projectState.tasks} />
    if(projectState.selectedProjectId===null){
      content=<NewProject onAdd={handleAddProject} onCancel={handleCancelProject}/>

    }else if(projectState.selectedProjectId===undefined){
      content= <NoProjectSelected onStartAddProject={handleSatrtAddProject}/>

    }
     
  return (
    <main className='h-screen my-8 flex gap-8'>
    <ProjectSideBar onStartAddProject={handleSatrtAddProject}projects={projectState.projects} onSelectProject={handleSelectProject}/>
    {/* <NewProject/> */}
    {/* <NoProjectSelected onStartAddProject={handleSatrtAddProject}/> */}
    {content}
    </main>
  );
}

export default App;
