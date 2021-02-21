export default function(state,action) {
  if(state === undefined){
    return []
  }

  switch (action.type) {
    case 'SET_MSGS':
      return action.payload
      break;
    default:
      return state;
  }
}
