// import authFirstState from '.';

export default function authReducer(
  auth = authFirstState, action,
) {
  const authSecondState = auth;

  switch (action.type) {
    case 'AUTH_LOGIN':
      break;
    case 'AUTH_LOGOUT':
      break;
    default:
      break;
  }
  return authSecondState;
}
