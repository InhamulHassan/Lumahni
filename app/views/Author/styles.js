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
  authorView: {
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
  authorImageWrapper: {
    position: "absolute",
    top: -30,
    left: 15,
    height: 120,
    width: 120,
    borderRadius: 60,
    overflow: "hidden",
    backgroundColor: "#cccccc"
  },
  authorImage: {
    height: "100%",
    width: "100%"
  },
  authorNameContainer: {
    position: "absolute",
    top: 30,
    left: 160
  },
  authorName: {
    fontSize: 18,
    marginBottom: 8,
    color: "#000000"
  },
  authorBioContainer: {
    position: "relative",
    top: 35,
    width: "90%",
    height: "auto",
    minHeight: 150,
    marginLeft: "5%",
    bottom: 80
  },
  authorBioText: {
    fontSize: 13,
    color: "#000000"
  },
  authorBioMore: {
    marginBottom: 40,
    color: "#6979f8"
  },
  booksByAuthorTitle: {
    color: "#000000",
    marginLeft: 12,
    marginBottom: 6,
    fontSize: 16,
    fontWeight: "bold"
  },
  booksByAuthorScroll: {
    flexDirection: "row",
    marginRight: 5,
    paddingHorizontal: 10
  },
  favouriteButtonContainer: {
    position: "absolute",
    bottom: 15,
    left: 10,
    width: "auto",
    height: 40,
    marginHorizontal: 5
  },
  favouriteButtonGradient: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 13
  },
  favouriteIcon: {
    paddingLeft: 10
  },
  favouriteButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center"
  },
  errorText: {
    color: "#ff6961"
  }
});
