/////////////////filter reducer/////////////
const filtersReducerDefaultState = {
    textFilter: "",
    sortBy: "newfirst",

  };
  
  const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case "TEXT_FILTER":
        return { ...state, textFilter: action.textFilter };
        case "SORT_BY_NEW_FIRST":
          return { ...state, sortBy: "newfirst" };
          case "SORT_BY_OLD_FIRST":
            return { ...state, sortBy: "oldfirst" };
        default:
        return state;
    }
  };

  export default filtersReducer;