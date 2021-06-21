const initState = []

const getUserReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_USER":
      return {
        data: action.payload.data,
      }

    default:
      return state;
  }
}

export default getUserReducer;