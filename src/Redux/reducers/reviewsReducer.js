//////////////Reviews Reducer//////////////////
const reviewsReducerDefaultState = [];

const reviewsReducer = (state = reviewsReducerDefaultState, action) => {
  switch (action.type) {

      case "FETCH_REVIEWS":
        console.log('actionREVIEWS',action.reviews)
        return action.reviews;
      case "ADD_REVIEW":
          console.log('actionREVIEWS',action.reviews)
          return [...state.reviews , action.newRev]

    default:
      return state;
  }
};

export default reviewsReducer;