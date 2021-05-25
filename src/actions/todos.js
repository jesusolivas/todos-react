// Internal dependencies
import { database } from "../firebase/firebase";

export const startLoading = () => ({
    type: "START_LOADING",
});

export const finishedLoading = () => ({
    type: "FINISHED_LOADING",
});

export const setTodos = (todos = []) => ({
    type: "SET_TODOS",
    todos,
});

export const setDescription = (description = "") => ({
    type: "SET_DESCRIPTION",
    description,
});

export const setDueDate = (dueDate = new Date()) => ({
    type: "SET_DUE_DATE",
    dueDate,
});

export const addTodo = (todo = {}) => ({
    type: "ADD_TODO",
    todo,
});

export const getTodos = async (dispatch, uid) => {
    dispatch(startLoading());

    const todos = [];
    const todosSnapshots = await database
        .ref(`users/${uid}/todos`)
        .once("value");

    todosSnapshots.forEach((snapshot) => {
        todos.push({
            id: snapshot.key,
            ...snapshot.val(),
        });
    });

    dispatch(setTodos(todos));

    dispatch(finishedLoading());
};

export const saveTodo = async (uid, todoData) => {
    const {
        description = "",
        dueDate = new Date().getTime(),
        status = 1,
        createdAt = new Date().getTime(),
    } = todoData;

    const todo = {
        description,
        dueDate: dueDate.getTime(),
        status,
        createdAt,
    };

    await database.ref(`users/${uid}/todos`).push(todo);
};
