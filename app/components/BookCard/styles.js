import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bookContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  viewContainer: {
    flex: 1,
    width: 120,
    height: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center"
  },
  bookImageWrapper: {
    width: 100,
    height: 140,
    margin: 10,
    backgroundColor: "#ffffff",
    overflow: "hidden",
    borderRadius: 15
  },
  bookImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff"
  },
  bookTitle: {
    width: 100,
    fontSize: 13,
    lineHeight: 15,
    color: "#000000",
    textAlign: "center",
    marginTop: 4,
    marginHorizontal: 10,
    flexShrink: 1,
    flexWrap: "wrap"
  },
  authorName: {
    width: 100,
    fontSize: 10,
    lineHeight: 12,
    color: "#cccccc",
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 4,
    flexShrink: 1,
    flexWrap: "wrap"
  }
});
