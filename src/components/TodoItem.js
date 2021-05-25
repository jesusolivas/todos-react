import "./TodoItem.css";

const getStatus = (status) => {
    const statusId = parseInt(status, 10);
    switch (statusId) {
        case 2:
            return "DONE";
        case 1:
        default:
            return "PENDING";
    }
};

const TodoItem = ({ description, dueDate, status }) => (
    <div className="todo-item">
        <div className="todo-item__property">{description}</div>
        <div className="todo-item__property">
            {new Date(dueDate).toLocaleDateString()}
        </div>
        <div className="todo-item__property">{getStatus(status)}</div>
    </div>
);

export default TodoItem;
