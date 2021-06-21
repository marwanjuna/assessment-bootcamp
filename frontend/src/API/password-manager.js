import axios from "axios";

const passwordAPI = axios.create({
  baseURL: "localhost:4444",
});

export default passwordAPI;