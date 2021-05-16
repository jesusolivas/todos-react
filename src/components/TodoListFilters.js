import { useContext } from "react";
import { Link } from "react-router-dom";
import TodosContext from "../context/todos-context";
import { setDescription } from "../actions/todos";
import "./TodoListFilters.css";

const onDescriptionChange = (e, dispatch) => {
    const newDescription = e.target.value;
    dispatch(setDescription(newDescription));
};

const TodoListFilters = () => {
    const { description, dispatch } = useContext(TodosContext);
    return (
        <div className="filters">
            <input
                type="text"
                placeholder="Todo Description"
                className="filters__description"
                value={description}
                onChange={(e) => { onDescriptionChange(e, dispatch) }}
            />
            <Link className="button" to="/create">Add Todo</Link>
        </div>
    )
};

export default TodoListFilters;