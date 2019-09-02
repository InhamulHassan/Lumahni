import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  searchContainer: {
    width: "100%",
    height: 50,
    paddingVertical: 10,
    backgroundColor: "#ffffff"
  },
  searchInputContainer: {
    width: "96%",
    height: 40,
    marginHorizontal: "2%"
  },
  searchInput: {
    backgroundColor: "#ffffff",
    color: "#3d3d3d"
  },
  suggestionsView: {
    width: "100%",
    minHeight: height - 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 0
  },
  scrollView: {
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  suggestionsContainer: {
    width: "100%",
    height: "auto",
    minHeight: height/3,
    backgroundColor: "transparent",
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 40
  },
  suggestionsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "left"
  },
  suggestionsGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  loadingContainer: {
    width: "100%",
    height: "auto",
    minHeight: height/3,
    backgroundColor: "transparent",
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 40
  },
  resultsView: {
    width: "100%",
    minHeight: height - 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 0
  },
  resultsContainer: {
    width: "100%",
    height: "auto",
    minHeight: height/3,
    backgroundColor: "transparent",
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 40
  },
  resultsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "left"
  },
  resultsGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  errorText: {
    color: "#ff6961"
  }
});
