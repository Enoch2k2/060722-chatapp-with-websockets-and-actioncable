export const signup = ( user, navigate ) => {
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
        navigate("/chat")
      })
  }
}

export const login = ( user, navigate ) => {
  // thunk will takeover!
  return dispatch => {
    fetch('/login', {
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
        navigate("/chat")
      })
  }
}

export const getCurrentUser = (setLoading) => {
  return dispatch => {
    fetch('/me')
      .then(resp => resp.json())
      .then(data => {
        if(!data.errors) {
          const action = {
            type: "LOGIN_USER",
            payload: data
          }
  
          dispatch(action);
        }
        setLoading(false)
      })
  }
}

export const logoutUser = () => {
  // returning an object means dispatch directly to reducer
  return {
    type: "LOGOUT_USER"
  }
}