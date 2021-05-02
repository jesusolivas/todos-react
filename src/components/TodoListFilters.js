import "./TodoListFilters.css";

const TodoListFilters = () => (
    <div className="filters">
        <input type="text" placeholder="Task Description" className="filters__description" />
        <button>Add Task</button>
    </div>
);

export default TodoListFilters;