import { StyleSheet } from "react-native";

export default StyleSheet.create({
  authorListContainer: {
    display: "flex",
    backgroundColor: "#ffffff",
    width: "100%",
    height: 100,
    marginVertical: 5
  },
  rootViewContainer: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center"
  },
  authorImageView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  authorImageWrapper: {
    width: 80,
    height: 80,
    margin: 5,
    backgroundColor: "#ffffff",
    overflow: "hidden",
    borderRadius: 40
  },
  authorImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff"
  },
  textView: {
    flex: 3,
    backgroundColor: "transparent",
    flexDirection: "column",
    alignContent: "flex-start"
  },
  authorName: {
    width: "100%",
    fontSize: 20,
    lineHeight: 22,
    color: "#000000",
    textAlign: "left",
    marginTop: 4,
    marginHorizontal: 10,
    flexShrink: 1,
    flexWrap: "wrap"
  }
});
