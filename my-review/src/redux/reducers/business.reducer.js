const businessReducer = (state = {}, action) => {
    switch (action) {
        case 'SET_BUSINESS':
            return action.payload;
        default:
            return state;
    }
}

export default businessReducer;