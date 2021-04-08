const INITIAL_STATE = {
    todos: [
        {
        id: 1,
        task: 'Walk the dog',
        completed: true,
        }
    ]
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {...state, todos: [...state.todos, action.payload]}
        case "TOGGLE_COMPLETED":
            const todos = state.todos.map(todo => {
                if (todo.id === action.id) {
                    return {...todo, completed: action.completed}
                } 
                return todo
            })
            return {...state, todos}
        case "REMOVE_TODO":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id),
            };
        default:
            return state;
    }
}

export default rootReducer;
