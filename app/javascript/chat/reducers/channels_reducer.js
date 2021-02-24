export default function(state = null, action) {
  switch (action.type) {
    case "SET_CHANNELS":
      return action.payload
      break;
    default:
      return state;

  }
}
