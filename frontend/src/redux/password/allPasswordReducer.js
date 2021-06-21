const initState = []

const allPasswordReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_ALL_PASSWORD":
      return {
        data: action.payload.data,
      }

    default:
      return state;
  }
}

export default allPasswordReducer;