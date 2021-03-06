//Individual todo items
import React from "react"; //her react fileında bunu kulanmalıyız
//react components are just functions

export const ToDoListItem = ({ todo, onClickComplete, onClickDelete }) => (
    <div>

        <h3>{todo.text}</h3>
        { todo.isCompleted ? <p> Completed!!!</p> : null } 
        <button
            onClick={() => onClickComplete(todo.text)}
            > Mark as Complete </button>
        <button
            onClick={() => onClickDelete(todo.text)}
            > Delete </button>
    </div>
)