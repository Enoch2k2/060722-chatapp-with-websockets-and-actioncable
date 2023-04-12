export const signup = ( user ) => {
  // thunk will takeover!
  return dispatch => {
    fetch('/signup', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(data => {
        // we want to dispatch directly to the reducer;

        const action = {
          type: "LOGIN_USER",
          payload: data
        }

        dispatch(action);
      })
  }
}

export const logoutUser = () => {
  // returning an object means dispatch directly to reducer
  return {
    type: "LOGOUT_USER"
  }
}