//TODO: to ensure that the typography used throughout the app is consisten
import { StyleSheet } from "react-native";
import fonts from "./fonts";
const largeText = 16;
const mediumText = 14;
const smallText = 12;
const regularText = fonts.android.regular;
const semiboldText = fonts.android.medium;
const lightText = fonts.android.light;
const thinText = fonts.android.thin;
const textStyles = StyleSheet.create({
  largeText: {
    fontFamily: regularText,
    fontSize: largeText
  },
  largeTextSemibold: {
    fontFamily: semiboldText,
    fontSize: largeText
  },
  largeTextLight: {
    fontFamily: lightText,
    fontSize: largeText
  },
  largeTextThin: {
    fontFamily: thinText,
    fontSize: largeText
  },
  mediumText: {
    fontFamily: regularText,
    fontSize: mediumText
  },
  mediumTextSemibold: {
    fontFamily: semiboldText,
    fontSize: mediumText
  },
  mediumTextLight: {
    fontFamily: lightText,
    fontSize: mediumText
  },
  mediumTextThin: {
    fontFamily: thinText,
    fontSize: mediumText
  },
  smallText: {
    fontFamily: regularText,
    fontSize: smallText
  },
  smallTextSemibold: {
    fontFamily: semiboldText,
    fontSize: smallText
  }
  smallTextLight: {
    fontFamily: lightText,
    fontSize: smallText
  },
  smallTextThin: {
    fontFamily: thinText,
    fontSize: smallText
  },
});

export default textStyles;
