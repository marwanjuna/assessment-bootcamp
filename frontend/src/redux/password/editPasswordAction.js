import passwordAPI from "../../API/password-manager";

const resetForm = () => {
  return {
    type: "EDIT_PASSWORD_RESET_FORM",
  };
};

const setWebsite = website => {
  return {
    type: "EDIT_PASSWORD_WEBSITE",
    payload: {
      website: website,
    },
  };
};

const setPassword = password => {
  return {
    type: "EDIT_PASSWORD_PASSWORD",
    payload: {
      password: password,
    },
  };
};

const setErrorMessage = errorMessage => {
  return {
    type: "EDIT_PASSWORD_SET_ERROR_MESSAGE",
    payload: {
      errorMessage: errorMessage,
    },
  };
};

const startLoading = () => {
  return {
    type: "EDIT_PASSWORD_START_LOADING",
  };
};

const stopLoading = () => {
  return {
    type: "EDIT_PASSWORD_STOP_LOADING",
  };
};

const editPassword = (website, password1, passID, history) => async dispatch => {
  try {
    dispatch(startLoading());
    dispatch(setErrorMessage(""));
    const submitData = {
      website: website,
      password: password1,
    };

    const password = await passwordAPI({
      method: "PUT",
      url: "/password/" + passID,
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

const editPasswordAction = {
  resetForm,
  setWebsite,
  setPassword,
  editPassword,
};

export default editPasswordAction;
