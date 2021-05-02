import TodoList from "./TodoList";
import TodoListFilters from "./TodoListFilters";
import TodosSummary from "./TodosSummary";
import "./Todos.css";

const items = [
    {
        id: 1,
        description: "Todo 1",
        dueDate: "02/05/2021",
        status: "Pending"
    },
    {
        id: 2,
        description: "Todo 2",
        dueDate: "03/05/2021",
        status: "Pending"
    },
    {
        id: 3,
        description: "Todo 3",
        dueDate: "04/05/2021",
        status: "Pending"
    }
];

const Todos = () => (
    <div className="todos">
        <TodosSummary count={items.length}/>
        <TodoListFilters />
        <TodoList todos={items} />
    </div>
);

export default Todos;