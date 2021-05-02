import "./TodoListFilters.css";

const TodoListFilters = () => (
    <div className="filters">
        <input type="text" placeholder="Todo Description" className="filters__description" />
        <button>Add Todo</button>
    </div>
);

export default TodoListFilters;