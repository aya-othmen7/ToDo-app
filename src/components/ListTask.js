import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task';

const ListTask = () => {
   const tasks= useSelector(state=> state.task.tasklist);
   console.log(tasks);
   
  return (
    <div className='todo-list'>
        {
            tasks.map((task)=><Task task={task}/>)
        }
    </div>
  )
}

export default ListTask