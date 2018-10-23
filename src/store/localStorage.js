import initialState from './initialState';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(!serializedState) {
            return initialState;
        }
        return JSON.parse(serializedState);
    }
    catch(err) {
        return initialState;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch (err) {
        console.log(err);
    }
}