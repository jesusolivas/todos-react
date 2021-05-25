const todosReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.todo];
        case "START_LOADING":
            return {
                ...state,
                isLoading: true
            };
        case "FINISHED_LOADING":
            return {
                ...state,
                isLoading: false
            };
        case "SET_TODOS":
            return {
                ...state,
                todos: action.todos
            };
        case "SET_DESCRIPTION":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    description: action.description
                }
            };
        case "SET_DUE_DATE":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    dueDate: action.dueDate
                }
            };
        default:
            return state
    }
}

export { todosReducer };