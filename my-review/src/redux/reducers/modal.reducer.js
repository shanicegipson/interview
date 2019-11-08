const modalReducer = (state = {}, action) => {
    switch (action.type) {
      case 'DISPLAY_REVIEW':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default modalReducer;