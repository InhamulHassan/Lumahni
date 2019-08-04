import { StyleSheet } from "react-native";

export default StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  scrollView: {
    paddingVertical: 30
  },
  bookView: {
    position: "relative",
    width: "90%",
    minWidth: "90%",
    height: "auto",
    minHeight: 300,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    marginHorizontal: "5%",
    marginTop: 40,
    marginBottom: 30,
    borderRadius: 15,
    padding: 5
  },
  bookImageWrapper: {
    position: "absolute",
    top: -30,
    left: 15,
    height: 180,
    width: 120,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#cccccc"
  },
  bookImage: {
    height: "100%",
    width: "100%"
  },
  bookTitleContainer: {
    position: "absolute",
    top: 30,
    left: 160
  },
  bookTitle: {
    fontSize: 18,
    marginBottom: 8,
    color: "#000000"
  },
  authorGroup: {
    position: "absolute",
    width: 160,
    flexDirection: "row",
    flexWrap: "wrap",
    top: 60,
    left: 160
  },
  authorContainer: {
    marginLeft: 2
  },
  authorName: {
    fontSize: 13,
    marginBottom: 4,
    marginRight: 4,
    color: "#3d3d3d"
  },
  bookText: {
    color: "#000000"
  },
  bookDescriptionContainer: {
    width: "90%",
    minHeight: 100,
    marginLeft: "5%",
    marginTop: 160,
    marginBottom: 24
  },
  bookDescriptionText: {
    fontSize: 13,
    color: "#000000"
  },
  bookDescriptionMore: {
    marginBottom: 40,
    color: "#6979f8"
  },
  bookDetailsView: {
    position: "relative",
    width: "90%",
    minWidth: "90%",
    height: "auto",
    minHeight: 150,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    marginHorizontal: "5%",
    marginTop: 15,
    marginBottom: 30,
    borderRadius: 15,
    padding: 5
  },
  bookDetailsContainer: {
    margin: 12
  },
  bookDetailsTitle: {
    color: "#000000",
    marginBottom: 6,
    fontSize: 16,
    fontWeight: "bold"
  },
  bookDetail: {
    color: "#000000",
    marginBottom: 2,
    fontSize: 13,
    fontWeight: "600"
  },
  bookDetailValue: {
    color: "#777777",
    fontSize: 13,
    fontWeight: "200"
  },
  similarBooksTitle: {
    color: "#000000",
    marginLeft: 15,
    marginBottom: 6,
    fontSize: 16,
    fontWeight: "bold"
  },
  similarBooksScroll: {
    flexDirection: "row",
    marginRight: 5,
    paddingHorizontal: 10
  },
  previewButtonContainer: {
    position: "absolute",
    bottom: 15,
    left: 10,
    width: "45%",
    height: 40,
    marginHorizontal: 5
  },
  previewButtonGradient: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 13
  },
  previewButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center"
  },
  holdButtonContainer: {
    position: "absolute",
    bottom: 15,
    right: 10,
    width: "45%",
    height: 40,
    marginHorizontal: 5
  },
  holdButtonGradient: {
    borderRadius: 14
  },
  holdButtonView: {
    margin: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 13,
    backgroundColor: "#ffffff"
  },
  holdButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6979f8",
    textAlign: "center"
  },
  errorText: {
    color: "#ff6961"
  }
});
