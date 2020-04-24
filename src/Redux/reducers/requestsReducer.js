///////////////Project Reducer//////////////////
const requestsReducerDefaultState = [];

const requestsReducer = (state = requestsReducerDefaultState, action) => {
  switch (action.type) {

      case "FETCH_REQUESTS":
  
        return [...action.requests];

        case "DELETE_REQUEST":
   return [
        ...state.filter(request=>request.id!==action.id)]
    default:
      return state;
  }
};

export default requestsReducer;