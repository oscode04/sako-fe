import axios from "axios";

const based_url = "https://sakoo.my.id";

const api = axios.create({
  baseURL: based_url,
});

export default api;
