export default function (state = null, action) {
  switch (action.type) {
    case 'UPDATE_TERM':
      return action.text ? action.text : null;
      break;
    default:
      break;
  }
  return state;
}
