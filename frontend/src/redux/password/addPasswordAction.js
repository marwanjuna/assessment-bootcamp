import passwordAPI from "../../../API/password-manager";

const fetchAllBooks = () => async (dispatch) => {
  try {
    const books = await bookListAPI({
      method: "GET",
      url: "/books",
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    });

    dispatch({
      type: "SHOW_ALL_BOOKS",
      payload: {
        data: books.data,
      }
    })

  } catch (error) {
    console.log(error);
  }
}

const bookAction = {
  fetchAllBooks,
};

export default bookAction;