import React from 'react';
import { Todo } from './Todo';

export const TodoList = ({todos, toggleCompleted}) => {
    
    return(
        <div>
        <h2>List of Todos</h2>
         { todos.map(el => 
            <Todo todo={el} key={el.id} toggleCompleted={toggleCompleted}/>
            )}
            </div>

    );
}
