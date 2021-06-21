const initState = {
  website: "",
  password: "",
  errorMessage: "",
  successMessage: "",
  isLoading: false,
};

const addPasswordReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PASSWORD_RESET_FORM":
      return {
        ...initState,
      };
    case "ADD_PASSWORD_WEBSITE":
      return {
        ...state,
        website: action.payload.website,
      };
    case "ADD_PASSWORD_PASSWORD":
      return {
        ...state,
        password: action.payload.password,
      };
    case "ADD_PASSWORD_SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    case "ADD_PASSWORD_SET_SUCCESS_MESSAGE":
      return {
        ...state,
        successMessage: action.payload.successMessage,
      };
    case "ADD_PASSWORD_START_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "ADD_PASSWORD_STOP_LOADING":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default addPasswordReducer;