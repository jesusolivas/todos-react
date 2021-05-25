// Third party dependencies
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

// Internal dependencies
import AuthContext from "../context/auth";
import { saveTodo } from "../actions/todos";

// Styles
import "./CreateTodo.css";
import "react-datepicker/dist/react-datepicker.css";

const CreateTodo = () => {
    const [description, setDescription] = useState("");
    const [dueDate, setDate] = useState(new Date());
    const { uid } = useContext(AuthContext);

    return (
        <div className="form">
            <div>
                <input
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                />
            </div>
            <div>
                <DatePicker
                    selected={dueDate}
                    onChange={(date) => {
                        setDate(date, setDate);
                    }}
                />
            </div>
            <div class="form__actions">
                <button>Cancel</button>
                <button
                    onClick={async () => {
                        await saveTodo(uid, { description, dueDate });
                    }}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default CreateTodo;
