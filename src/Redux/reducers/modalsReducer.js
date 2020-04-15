
const initialState = null


const modalsReducer= (state = initialState, action) => {
  switch (action.type) {
    case 'MODAL_OPEN':
        console.log('MODAL reducer open')
        return {
            modalType: action.modalType,  
            modalProps: action.modalProps
       
          }
    case 'MODAL_CLOSE':
        console.log('MODAL reducer close')
        return initialState

        
        default:
          return state
  }
}
export default modalsReducer;