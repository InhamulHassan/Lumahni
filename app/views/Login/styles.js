import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  rootView: {
    flex: 1,
    paddingTop: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  logoContainerView: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  logoImageWrapper: {
    width: width - 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  logoImage: {
    resizeMode: "contain"
  },
  logoText: {
    color: "#1498d5",
    fontWeight: "bold",
    backgroundColor: "transparent",
    marginTop: 20
  },
  formContainerView: {
    flex: 5,
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  textContainer: {
    position: "relative",
    width: width - 40,
    minHeight: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#1498d5",
    marginVertical: 15,
    marginHorizontal: 5
  },
  textInputContainer: {
    marginVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0
  },
  input: {
    backgroundColor: "transparent",
    marginHorizontal: 5,
    paddingLeft: 5,
    color: "#000000"
  },
  usernameInput: {
    backgroundColor: "transparent",
    marginHorizontal: 5,
    paddingLeft: 5,
    marginRight: 45,
    color: "#000000"
  },
  iconVisibilityButton: {
    paddingRight: 5
  },
  iconVisibility: {
    width: 25,
    height: 25,
    tintColor: "rgba(0, 0, 0, 0.2)"
  },
  errorView: {
    padding: "5px 5px"
  },
  errorText: {
    color: "$ED4740",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 2
  },
  loginButton: {
    alignItems: "center",
    height: 60,
    width: width - 40,
    justifyContent: "center",
    borderRadius: 20,
    zIndex: 100
  },
  loginButtonTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 22
  }
});
