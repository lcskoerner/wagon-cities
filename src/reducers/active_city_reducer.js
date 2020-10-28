export default function(state, action) {
  if (state === undefined) {
    return null;
  }

  switch (action.type) {
    case 'SET_ACTIVE_CITY':
      return action.payload;
    default:
      return state;
  }
}
