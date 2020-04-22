///////////////Project Reducer//////////////////

const initialState = []
const projectsReducer = (state = initialState, action) => {


  switch (action.type) {
    
    case "FETCH_PROJECTS":
      return action.projects;

      case "SINGLE_PROJECT":

        return [action.singleProject];



      case "USER_PROJECTS":
        return action.projects;
    default:
      return state;
  }
};

export default projectsReducer;
