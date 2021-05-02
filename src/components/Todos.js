import TodoList from "./TodoList";
import TodoListFilters from "./TodoListFilters";
import "./Todos.css";

const Todos = () => (
    <div className="todos">
        <TodoListFilters />
        <TodoList />
    </div>
);

export default Todos;