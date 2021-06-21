import passwordAPI from "../../API/password-manager";

const fetchDeletePassword = (passID) => async (dispatch) => {
  try {
    const passwords = await passwordAPI({
      method: "GET",
      url: "/password/" + passID,
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    });

    dispatch({
      type: "DELETE_PASSWORD",
      payload: {
        data: passwords.data.password_list,
      }
    })

  } catch (error) {
    console.log(error);
  }
}

const deletePasswordAction = {
  fetchDeletePassword,
};

export default deletePasswordAction;