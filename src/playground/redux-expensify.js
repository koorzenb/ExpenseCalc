import { createStore, combineReducers} from redux;

const demoState = {
expenses: [
    {
        id: 'sdfs',
        description: 'Jan rent',
        note: 'This was final payment',
        amount: 54500,
        createAt: 0
    }
],
filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}

};