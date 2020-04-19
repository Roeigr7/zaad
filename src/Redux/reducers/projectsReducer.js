///////////////Project Reducer//////////////////

const initialState = []
const projectsReducer = (state = initialState, action) => {


  switch (action.type) {
    
    case "FETCH_PROJECTS":
      console.log('wwwREDUCERFETCH',action.projects)
      return action.projects;

    case "DELETE_PROJECTS":
      return [...state.filter((project) => project.id !== action.id)];

      case "SINGLE_PROJECT":
        console.log('77777wwwREDUCERFETCH',action.projects)
        return [action.singleProject];

    case "EDIT_PROJECT":
      return state.map((project) => {
        if (project.id === action.id) {
          return {
            ...project,
            ...action.updates,
          };
        } else {
          return project;
        }
      });

      case "USER_PROJECTS":
        return action.projects;
    default:
      return state;
  }
};

export default projectsReducer;
