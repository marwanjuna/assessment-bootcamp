import passwordAPI from "../../../API/password-manager";

const resetForm = () => {
  return {
    type: "USER_UPDATE_RESET_FORM",
  };
};

const setName = name => {
  return {
    type: "USER_UPDATE_SET_NAME",
    payload: {
      name: name,
    },
  };
};

const setAddress = address => {
  return {
    type: "USER_UPDATE_SET_ADDRESS",
    payload: {
      address: address,
    },
  };
};

const setErrorMessage = errorMessage => {
  return {
    type: "USER_UPDATE_SET_ERROR_MESSAGE",
    payload: {
      errorMessage: errorMessage,
    },
  };
};

const setSuccessMessage = successMessage => {
  return {
    type: "USER_UPDATE_SET_SUCCESS_MESSAGE",
    payload: {
      successMessage: successMessage,
    },
  };
};

const startLoading = () => {
  return {
    type: "USER_UPDATE_START_LOADING",
  };
};

const stopLoading = () => {
  return {
    type: "USER_UPDATE_STOP_LOADING",
  };
};

const update = (name, address, userID, history) => async dispatch => {
  try {
    dispatch(startLoading());
    dispatch(setErrorMessage(""));
    const submitData = {
      full_name: name,
      address: address,
    };

    const user = await passwordAPI({
      method: "PUT",
      url: "/users/" + userID,
      data: submitData,
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },

    });

    history.push("/profile/" + userID)
    dispatch(stopLoading());

  } catch (error) {
    console.log(error);
    dispatch(setErrorMessage(error.response || ["internal server error"]));
    dispatch(stopLoading());
  }

}

const updateUserAction = {
  resetForm,
  setName,
  setAddress,
  update,
};

export default updateUserAction;
