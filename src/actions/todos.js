import { database } from "../firebase/firebase";

export const startLoading = () => ({
    type: "START_LOADING"
});

export const finishedLoading = () => ({
    type: "FINISHED_LOADING"
});

export const setTodos = (todos = []) => ({
    type: "SET_TODOS",
    todos
});

export const setDescription = (description = "") => ({
    type: "SET_DESCRIPTION",
    description
});

export const getTodos = async (dispatch) => {
    dispatch(startLoading());

    const todos = [];
    const todosSnapshots = await database.ref("todos").once("value");

    todosSnapshots.forEach((snapshot) => {
        todos.push({
            id: snapshot.key,
            ...snapshot.val()
        });
    });

    dispatch(setTodos(todos));

    dispatch(finishedLoading());
};
