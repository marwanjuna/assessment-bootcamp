const initState = {}

const deletePasswordReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_PASSWORD":
      return {
        ...initState,
      }

    default:
      return state;
  }
}

export default deletePasswordReducer;