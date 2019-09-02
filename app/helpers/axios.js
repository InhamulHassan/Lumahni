import axios from "axios";
import { DEVELOPMENT_SERVER_URL } from "react-native-dotenv";

const instance = axios.create({
  baseURL: DEVELOPMENT_SERVER_URL,
  timeout: 2500
});

export { instance as default };
