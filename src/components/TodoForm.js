import React, { useState } from 'react';
 
export const TodoForm = (props) => {
   const [userInput, setUserInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.addNewTodo(userInput);
        setUserInput('');
        
    };

    const handleChange = e => {
        e.preventDefault();
        setUserInput(e.target.value);
    };

    
    return(
   
        <form onSubmit={handleSubmit}>
            <input className='input is-success' type='text' value={userInput} onChange={handleChange}/>
            <br/><br/>
            <button type='submit' className='button is-success'>Add Todo</button> {' '}
            <button className='button is-danger' onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    
    )
}