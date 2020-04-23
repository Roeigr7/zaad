//////////////Reviews Reducer//////////////////
const reviewsReducerDefaultState = [];

const reviewsReducer = (state = reviewsReducerDefaultState, action) => {
  switch (action.type) {

      case "FETCH_REVIEWS":
  
        return action.reviews;
      case "ADD_REVIEW":
   
          return [...state.reviews , action.newRev]

    default:
      return state;
  }
};

export default reviewsReducer;