import passwordAPI from "../../API/password-manager";

const fetchAllPassword = (userID) => async (dispatch) => {
  try {
    const passwords = await passwordAPI({
      method: "GET",
      url: "/users/" + userID,
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    });

    dispatch({
      type: "SHOW_ALL_PASSWORD",
      payload: {
        data: passwords.data.password_list,
      }
    })

  } catch (error) {
    console.log(error);
  }
}

const allPasswordAction = {
  fetchAllPassword,
};

export default allPasswordAction;