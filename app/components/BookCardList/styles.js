import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bookListContainer: {
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
  bookImageView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bookImageWrapper: {
    width: 60,
    height: 84,
    margin: 5,
    backgroundColor: "#ffffff",
    overflow: "hidden",
    borderRadius: 5
  },
  bookImage: {
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
  bookTitle: {
    width: "100%",
    fontSize: 20,
    lineHeight: 22,
    color: "#000000",
    textAlign: "left",
    marginTop: 4,
    marginHorizontal: 10,
    flexShrink: 1,
    flexWrap: "wrap"
  },
  authorName: {
    width: "100%",
    fontSize: 18,
    lineHeight: 20,
    color: "#cccccc",
    textAlign: "left",
    marginHorizontal: 10,
    marginTop: 4,
    flexShrink: 1,
    flexWrap: "wrap"
  }
});
