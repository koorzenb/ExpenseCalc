import {createStore} from 'redux';




const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incBy = typeof action.incBy == 'number' ? action.incBy : 1;
            return {count: state.count + incBy};
        case 'DECREMENT':
            return {count: state.count - 1};
        case 'SET':
            return {count: action.count};
        case 'RESET':
            return {count: 0};
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incBy: 5
});

console.log(store.getState());

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'SET',
    count: 101
});