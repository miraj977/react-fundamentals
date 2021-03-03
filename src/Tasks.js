import React from 'react'
import { FaTimes } from 'react-icons/fa'


const Tasks = ( { tasks, onDelete, onToggle } ) =>
{
    return (
        <div className="left-align">
            {tasks.map( ( task ) => (
                <div key={task.id} className="task d-flex">

                    <div style={{ textDecoration: !task.reminder ? 'line-through' : '', color: !task.reminder ? 'grey' : '', cursor: 'pointer' }} onClick={( e ) => onToggle( e, task.id )}>
                        <input type="checkbox" className="checkbox" />
                        {task.text}
                    </div>
                    <FaTimes style={{ color: 'red', cursor: 'pointer' }} className="close" onClick={() => onDelete( task.id )} />
                </div>
            ) )
            }
        </div >
    );
}

export default Tasks;