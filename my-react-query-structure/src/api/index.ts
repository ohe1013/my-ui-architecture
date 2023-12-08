import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const http = axios.create({ baseURL: baseUrl, method: "get" });

export { http };
