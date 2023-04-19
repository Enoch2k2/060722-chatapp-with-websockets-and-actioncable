export const addMessage = message => {
  return {
    type: "ADD_MESSAGE",
    payload: message
  }
}

export const loadMessages = () => {
  return dispatch => {
    fetch("/messages")
      .then(resp => resp.json())
      .then(data => {
        const action = {
          type: "LOAD_MESSAGES",
          payload: data
        }
        dispatch(action);
      })
  }
}