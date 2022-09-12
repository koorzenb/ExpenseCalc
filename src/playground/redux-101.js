import {createStore} from 'redux';


const incrementCount = ({incBy = 1} = {}) => ({
    type: 'INCREMENT',
    incBy
});

const decrementCount = ({decBy = 1} = {}) => ({
    type: 'DECREMENT',
    decBy
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});

const reset = () => ({
    type: 'RESET'
});


const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incBy = typeof action.incBy == 'number' ? action.incBy : 1;
            return {count: state.count + incBy};
        case 'DECREMENT':
            return {count: state.count - action.decBy};
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

store.dispatch(incrementCount({incBy: 5}));

console.log(store.getState());

store.dispatch(decrementCount({decBy: 3}));

store.dispatch(setCount({count: 102}));

store.dispatch(reset());

