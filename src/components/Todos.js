import TodoList from "./TodoList";
import TodoListFilters from "./TodoListFilters";
import TodosSummary from "./TodosSummary";
import "./Todos.css";

const Todos = () => (
    <div className="todos">
        <TodosSummary />
        <TodoListFilters />
        <TodoList />
    </div>
);

export default Todos;