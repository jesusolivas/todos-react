// Third party dependencies
import { useContext } from "react";
import DatePicker from "react-datepicker";

// Internal dependencies
import TodosContext from "../context/todos";
import { Link } from "react-router-dom";
import { setDescription, setDueDate } from "../actions/todos";

// Styles
import "./TodoListFilters.css";
import "react-datepicker/dist/react-datepicker.css";

const onDescriptionChange = (e, dispatch) => {
    const newDescription = e.target.value;
    dispatch(setDescription(newDescription));
};

const onDateChange = (date, dispatch) => {
    dispatch(setDueDate(date));
};

const TodoListFilters = () => {
    const { filter, dispatch } = useContext(TodosContext);
    const { description, dueDate } = filter;
    return (
        <div className="filters">
            <input
                type="text"
                placeholder="Todo Description"
                className="filters__description"
                value={description}
                onChange={event => { onDescriptionChange(event, dispatch) }}
            />
            <DatePicker selected={dueDate} onChange={date => { onDateChange(date, dispatch) }} />
            <Link className="button" to="/create">Add Todo</Link>
        </div>
    )
};

export default TodoListFilters;