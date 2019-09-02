import { StyleSheet } from "react-native";

export default StyleSheet.create({
  genreContainer: {
    width: 120,
    height: 120,
    backgroundColor: "#ffffff",
    marginTop: 5
  },
  genreWrapper: {
    display: "flex",
    flex: 1,
    width: 120,
    height: 120,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  genreImage: {
    width: "100%",
    height: "100%"
  },
  genreText: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center"
  },
  gradientOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.6
  },
  gradientOverlaySelected: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.9
  }
});
