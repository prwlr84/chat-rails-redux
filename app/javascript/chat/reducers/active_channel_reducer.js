export default function(state = null, action) {
  switch(action.type){
    case 'SET_ACTIVE':
    return action.payload;
    default:
      return state
 }
}
