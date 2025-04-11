import axios from "axios";

const API_URL = "http://localhost:3003/api/v1";

const $api = axios.create({
  baseURL: API_URL,
});

export default $api