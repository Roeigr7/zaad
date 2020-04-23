
const initialState = null


const modalsReducer= (state = initialState, action) => {
  switch (action.type) {
    case 'MODAL_OPEN':

        return {
            modalType: action.modalType,  
            modalProps: action.modalProps
       
          }
    case 'MODAL_CLOSE':

        return initialState

        
        default:
          return state
  }
}
export default modalsReducer;