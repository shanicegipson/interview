// Used to store reviews returned from the server
const reviewReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_REVIEW':
            return action.payload;
        default:
            return state;
    }
}

export default reviewReducer;