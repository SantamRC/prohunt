import { combineReducers } from 'redux'

const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.payload;
        default:
            return state;
    }
};


const stringsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_STRINGS':
            return [...state, ...action.payload];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    user: userReducer,
    strings: stringsReducer,
});

export default rootReducer;