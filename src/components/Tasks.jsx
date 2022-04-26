import React from 'react';
import Task from './Task';

const Tasks = ({tasks}) => {
    
    console.log(tasks)
    return ( 
        <>
        {
            tasks.map((task)=>{
                return <Task task={task}/>
            })
        }
        
        
        </>
     );
}
 
export default Tasks;