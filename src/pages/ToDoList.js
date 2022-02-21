import React from "react";
import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = ({ todos, onDeleteTodo, onCompleteTodo }) => (
    <div>
        {todos.map (todo => (
            <ToDoListItem
                onClickComplete={onCompleteTodo}
                onClickDelete={onDeleteTodo}
                todo = {todo} />
        ))}
    </div>
)