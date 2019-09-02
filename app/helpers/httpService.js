import axios from "./axios";
import { AsyncStorage } from "react-native";
import { userLogout } from "../redux/actions/userDbAction";

const httpService = {
  // we pass the redux store and history in order to dispatch the logout actions
  // and push the user to login

  setupInterceptors: (store, navigation) => {
    axios.interceptors.request.use(config => {
      const token = AsyncStorage.getItem("auth_token");
      if (token) {
        try {
          config.headers.Authorization = token
            ? `Bearer ${JSON.parse(token)}`
            : "";
        } catch (error) {
          // When the token is changed through the Dev Tools and unable to be processed we logout the user
          console.log(
            "Error Response: Invalid Token || Token tampered with - ",
            error
          );
          store.dispatch(userLogout());
          navigation.navigate("LoginScreen");
        }
      } else {
        console.log("Error Response: No Token Found");
      }
      return config;
    });

    axios.interceptors.response.use(
      response => {
        // simply return the response if there is no
        return response;
      },
      error => {
        if (error.response) {
          // in this case we only care about unauthorized errors
          if ([401, 403].indexOf(error.response.status) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            store.dispatch(userLogout());
            navigation.navigate("LoginScreen");
            console.log("Error Response: Unauthorized");
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("Error Request: ", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        return Promise.reject(error);
      }
    );
  }
};
export default httpService;
