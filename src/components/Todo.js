import React from 'react';
const style1 = {
    color: 'red',
    textDecoration: 'line-through',
    textDecorationColor:'black'
};

const style2 = {
    color: 'red',
    textDecoration: 'none'
}
export const Todo = (props) => {
    return(
    <h3 onClick={() => props.toggleCompleted(props.todo.id)}
        style={props.todo.completed? style1 : style2}
    >
        {props.todo.title}   
    </h3>
    )
}