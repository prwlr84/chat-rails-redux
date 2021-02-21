export default function(state = null, action) {
  if(state === undefined){
    return []
  }

  switch (action.type) {
    case 'SET_ACTIVE_CHANNEL':
      return action.payload
      break;
    default:
      return state;
  }
}
