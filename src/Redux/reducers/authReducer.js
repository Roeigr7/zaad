const initialState = {
user:{
  admin:false
},
authenticated:false
}

const authReducer= (state=initialState, action) => {
  switch (action.type) {
    case "LOGIN":

      return {
        user: action.userAuth,
        authenticated: true
      };
    case "LOGOUT":

      return { 
          user: null,
        authenticated: false
      }
      case "REGISTER":
        return {authenticated:true,
          currentUser: action.user};
    default:
      return state;
  }
};

export default authReducer;