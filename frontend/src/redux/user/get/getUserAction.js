import passwordAPI from "../../../API/password-manager";

const fetchUser = (userID) => async (dispatch) => {
  try {
    const user = await passwordAPI({
      method: "GET",
      url: "/users/" + userID,
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    });

    dispatch({
      type: "SHOW_USER",
      payload: {
        data: user.data,
      }
    })

  } catch (error) {
    console.log(error);
  }
}

const getUserAction = {
  fetchUser,
};

export default getUserAction;