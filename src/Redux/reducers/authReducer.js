const initialState = {
user:null,
authenticated:false
}

const authReducer= (state=initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log('wwwwwwwwwwwwwwwwreducerLOGINNNN')
      console.log('wwwwwwwwwwloginstateAuth',state.authenticated)
      console.log('wwwwwwwwwwloginstate',state.user)
      return {
        user: action.userAuth,
        authenticated: true
      };
    case "LOGOUT":
      console.log('loginWHENLOGOUTstate',state.authenticated?state.authenticated: 'LOGINNULL FALSEEE')
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