const initState = {
  name: "",
  address: "",
  errorMessage: "",
  successMessage: "",
  isLoading: false,
};

const updateUserReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_UPDATE_RESET_FORM":
      return {
        ...initState,
      };
    case "USER_UPDATE_SET_NAME":
      return {
        ...state,
        name: action.payload.name,
      };
    case "USER_UPDATE_SET_ADDRESS":
      return {
        ...state,
        address: action.payload.address,
      };
    case "USER_UPDATE_SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    case "USER_UPDATE_START_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_UPDATE_STOP_LOADING":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default updateUserReducer;