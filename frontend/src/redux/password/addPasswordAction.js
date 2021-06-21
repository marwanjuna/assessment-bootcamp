import passwordAPI from "../../API/password-manager";

const resetForm = () => {
  return {
    type: "ADD_PASSWORD_RESET_FORM",
  };
};

const setWebsite = website => {
  return {
    type: "ADD_PASSWORD_WEBSITE",
    payload: {
      website: website,
    },
  };
};

const setPassword = password => {
  return {
    type: "ADD_PASSWORD_PASSWORD",
    payload: {
      password: password,
    },
  };
};

const setErrorMessage = errorMessage => {
  return {
    type: "ADD_PASSWORD_SET_ERROR_MESSAGE",
    payload: {
      errorMessage: errorMessage,
    },
  };
};

const setSuccessMessage = successMessage => {
  return {
    type: "ADD_PASSWORD_SET_SUCCESS_MESSAGE",
    payload: {
      successMessage: successMessage,
    },
  };
};

const startLoading = () => {
  return {
    type: "ADD_PASSWORD_START_LOADING",
  };
};

const stopLoading = () => {
  return {
    type: "ADD_PASSWORD_STOP_LOADING",
  };
};

const addNewPassword = (website, password1, history) => async dispatch => {
  try {
    dispatch(startLoading());
    dispatch(setSuccessMessage(""));
    dispatch(setErrorMessage(""));
    const submitData = {
      website: website,
      password: password1,
    };

    const password = await passwordAPI({
      method: "POST",
      url: "/password",
      data: submitData,
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },

    });

    history.push("/")
    dispatch(stopLoading());

  } catch (error) {
    console.log(error);
    dispatch(setErrorMessage(error.response || ["internal server error"]));
    dispatch(stopLoading());
  }

}

const addNewPasswordAction = {
  resetForm,
  setWebsite,
  setPassword,
  addNewPassword,
};

export default addNewPasswordAction;
