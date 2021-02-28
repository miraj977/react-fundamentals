import React, { useState, useRef, useEffect } from 'react'


const Todo = () =>
{
    const [ count, setCount ] = useState( 0 );
    const [ name, setName ] = useState( '' );
    const renderCount = useRef( 1 );
    const inputRef = useRef();

    useEffect( () =>
    {
        renderCount.current = renderCount.current + 1;
    } );
    return (
        <div className="todo-container">
            <p className="render">Render Count: {renderCount.current}</p>

            <input type="text" ref={inputRef} value={name} onChange={e =>
            {
                setName( e.target.value )
            }} />
            <input type="submit" value="Submit" />
            <p>Counter: <span>{count}</span></p>
            <button type="button" onClick={() => setCount( count + 1 )}>Increase</button>
            <button type="button" onClick={() => setCount( 0 )}>Reset</button>
            <p>New Name: {name}</p>
        </div>
    )
}
export default Todo; 