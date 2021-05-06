import TodoList from "./TodoList";
import TodoListFilters from "./TodoListFilters";
import TodosSummary from "./TodosSummary";
import "./Todos.css";

const Todos = ({ todos, isLoading }) => (
    <div className="todos">
        <TodosSummary count={todos.length} isLoading={isLoading} />
        <TodoListFilters />
        <TodoList todos={todos} />
    </div>
);

export default Todos;