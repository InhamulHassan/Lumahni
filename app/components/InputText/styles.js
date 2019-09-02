import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  textContainer: {
    position: "relative",
    width: width - 40,
    minHeight: 40,
    borderRadius: 20,
    // borderWidth: 2,
    // borderColor: "#1498d5",
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
  }
});
