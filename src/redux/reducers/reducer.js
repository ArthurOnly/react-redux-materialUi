const INITIAL_STATE = {
  element: "initial",
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ACTION":
        const payload = action.payload
      return { ...state, element: payload}
    default:
      return state
  }
}