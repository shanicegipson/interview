// Used to store reviews returned from the server
const reviewReducer = (state = {}, action) => {
    switch (action) {
        case 'ADD_REVIEW':
            return action.payload;
        default:
            return state;
    }
}

export default reviewReducer;