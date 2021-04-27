import "./TodoItem.css";

const TodoItem = ({ description, dueDate, status }) => (
    <div className="todo-item">
        <div className="todo-item__property">{description + description + description + description}</div>
        <div className="todo-item__property">{dueDate}</div>
        <div className="todo-item__property">{status}</div>
    </div>
);

export default TodoItem;