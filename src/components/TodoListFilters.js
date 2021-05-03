import { Link } from "react-router-dom";
import "./TodoListFilters.css";

const TodoListFilters = () => (
    <div className="filters">
        <input type="text" placeholder="Todo Description" className="filters__description" />
        <Link className="button" to="/create">Add Todo</Link>
    </div>
);

export default TodoListFilters;