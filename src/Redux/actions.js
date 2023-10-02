// actions/userActions.js
export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});

// actions/stringActions.js
export const setStrings = (strings) => ({
    type: 'SET_STRINGS',
    payload: strings,
});

export const setSearch = (response) => ({
    type: 'SET_SEARCH',
    payload: response
})