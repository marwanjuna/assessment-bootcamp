import passwordAPI from "../../../API/password-manager";

const resetForm = () => {
  return {
    type: "USER_LOGIN_RESET_FORM",
  };
};

const setEmail = email => {
  return {
    type: "USER_LOGIN_SET_EMAIL",
    payload: {
      email: email,
    },
  };
};

const setPassword = password => {
  return {
    type: "USER_LOGIN_SET_PASSWORD",
    payload: {
      password: password,
    },
  };
};

const setErrorMessage = errorMessage => {
  return {
    type: "USER_LOGIN_SET_ERROR_MESSAGE",
    payload: {
      errorMessage: errorMessage,
    },
  };
};

const logout = () => {
  return {
    type: "USER_LOGOUT",
  };
};

const startLoading = () => {
  return {
    type: "USER_LOGIN_START_LOADING",
  };
};

const stopLoading = () => {
  return {
    type: "USER_LOGIN_STOP_LOADING",
  };
};

const login = (email, password, history) => async dispatch => {
  try {
    dispatch(startLoading())
    dispatch(setErrorMessage(""))
    const submitData = {
      email: email,
      password: password,
    };

    const user = await passwordAPI({
      method: "POST",
      url: "/users/login",
      data: submitData,
    });

    const accessToken = user.data.token;
    const userID = user.data.user_id;

    localStorage.setItem("userID", userID);
    localStorage.setItem("accessToken", accessToken);
    console.log(user)

    dispatch(stopLoading());
    history.push("/dashboard")
  } catch (error) {
    console.log(error);
    dispatch(setErrorMessage(["The email/password is incorrect"] || ["internal server error"]));
    dispatch(stopLoading());
  }
}

const userLoginAction = {
  resetForm,
  setEmail,
  setPassword,
  logout,
  login,
};

export default userLoginAction;
