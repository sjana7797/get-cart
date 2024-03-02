import axios from "axios";

const nestJsInstance = axios.create({
  baseURL: import.meta.env.VITE_NESTJS_API_URL,
});

export { nestJsInstance };
