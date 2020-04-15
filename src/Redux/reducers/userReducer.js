const INITIAL_STATE={
    currentUser:null,
    allUsers:null
};

const userReducer=(state=INITIAL_STATE,action)=>{

    switch(action.type){
 case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser:action.payload
            };
case "GET_ALL_USERS":
                return {
          allUsers:action.usersList
                };
        default:
          return state;
    }
};

export default userReducer;