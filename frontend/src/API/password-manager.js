import axios from "axios";

const passwordAPI = axios.create({
  baseURL: "https://password-manager-marwan.herokuapp.com/",
});

export default passwordAPI;