const initState = {
  website: "",
  password: "",
  errorMessage: "",
  isLoading: false,
};

const editPasswordReducer = (state = initState, action) => {
  switch (action.type) {
    case "EDIT_PASSWORD_RESET_FORM":
      return {
        ...initState,
      };
    case "EDIT_PASSWORD_WEBSITE":
      return {
        ...state,
        website: action.payload.website,
      };
    case "EDIT_PASSWORD_PASSWORD":
      return {
        ...state,
        password: action.payload.password,
      };
    case "EDIT_PASSWORD_SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    case "EDIT_PASSWORD_START_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "EDIT_PASSWORD_STOP_LOADING":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default editPasswordReducer;