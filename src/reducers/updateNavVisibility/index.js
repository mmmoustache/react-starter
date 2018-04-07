export default function (state = null, action) {
  switch (action.type) {
    case 'UPDATE_NAV_VISIBILITY':
      return action.text ? action.text : null;
      break;
    default:
      break;
  }
  return state;
}
