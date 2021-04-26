import React from "react";
import "./TodoItem.css";

const TodoItem = ({ description, dueDate, status }) => (
    <div className="todo-item">
        <div>{description}</div>
        <div>{dueDate}</div>
        <div>{status}</div>
    </div>
);

export default TodoItem;