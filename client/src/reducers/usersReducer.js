const initialState = {
  user: undefined,
  loggedIn: false
}

const usersReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOGIN_USER":
      return {
        user: action.payload,
        loggedIn: true
      }
    case "LOGOUT_USER":
      return initialState;
    default:
      return state;
  }
}

export default usersReducer;