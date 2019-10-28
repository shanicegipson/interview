const mapReducer = (state = {}, action) => {
    switch (action) {
        case 'SET_MAP':
            return action.payload;
        default:
            return state;
    }
}

export default mapReducer;