import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks';

const Header = ( { title } ) =>
{
    const [ tasks, setTasks ] = useState(
        [
            {
                id: 1,
                text: "Doc's appointment",
                day: 'Feb 5th at 3:30pm',
                reminder: true,
            },
            {
                id: 2,
                text: "Wife's Birthday",
                day: 'Jan 25th at 12:00am',
                reminder: true,
            },
            {
                id: 3,
                text: "Interview",
                day: 'Mar 5th at 10:30pm',
                reminder: true,
            },
            {
                id: 4,
                text: "Doc's appointment",
                day: 'Mar 25th at 3:30pm',
                reminder: true,
            },
        ]
    );
    const onClick = () =>
    {

    }
    const onToggle = ( e, id ) =>
    {

        e.target.children[ 0 ] && e.target.children[ 0 ].checked ? e.target.children[ 0 ].checked = false : e.target.children[ 0 ].checked = true;

        setTasks( tasks.map( ( task ) =>
            task.id === id ? { ...task, reminder: !task.reminder } : task ) )
    }
    const deleteTask = ( id ) =>
    {
        setTasks( tasks.filter( ( task ) => task.id !== id ) )

    }
    return (
        <header className="center">
            <h1>{title}</h1>
            { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={onToggle} /> : <p style={{ display: 'block' }}>No Tasks Added</p>}
            < Button background="#007bff" color="white" text="Add" onClick={onClick} />
        </header >
    );
};

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header;