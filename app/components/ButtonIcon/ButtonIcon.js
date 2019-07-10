import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  ActivityIndicator,
  ViewPropTypes,
  Platform,
  StyleSheet
} from "react-native";
import { renderNode, conditionalStyle, color } from "../../helpers";
import Icon from "../Icon";
import colors from '../../config/colors';

const defaultLoadingProps = (type) => ({
  color: type === "solid" ? "white" : colors.primary,
  size: "small"
});

class ButtonIcon extends Component {
  componentDidMount() {
    const { linearGradientProps, ViewComponent } = this.props;
    if (linearGradientProps && !global.Expo && !ViewComponent) {
      /* eslint-disable no-console */
      console.error(
        `You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}`
      );
    }
  }

  render() {
    const {
      TouchableComponent,
      containerStyle,
      onPress,
      buttonStyle,
      type,
      loading,
      loadingStyle,
      loadingProps: passedLoadingProps,
      title,
      titleProps,
      titleStyle,
      icon,
      iconContainerStyle,
      iconRight,
      disabled,
      disabledStyle,
      disabledTitleStyle,
      raised,
      linearGradientProps,
      ViewComponent = !disabled && linearGradientProps && global.Expo
        ? global.Expo.LinearGradient
        : View,
      ...attributes
    } = this.props;

    if (
      Platform.OS === "android" &&
      (buttonStyle.borderRadius && !attributes.background)
    ) {
      if (Platform.Version >= 21) {
        attributes.background = TouchableNativeFeedback.Ripple(
          "ThemeAttrAndroid",
          false
        );
      } else {
        attributes.background = TouchableNativeFeedback.SelectableBackground();
      }
    }

    const loadingProps = {
      ...defaultLoadingProps(type),
      ...passedLoadingProps
    };

    return (
      <View
        style={StyleSheet.flatten([
          styles.container,
          {
            borderRadius:
              buttonStyle.borderRadius || styles.container.borderRadius
          },
          containerStyle,
          raised && !disabled && styles.raised(type)
        ])}
      >
        <TouchableComponent
          onPress={onPress}
          activeOpacity={0.3}
          disabled={disabled}
          {...attributes}
        >
          <ViewComponent
            {...linearGradientProps}
            style={StyleSheet.flatten([
              styles.button(type),
              buttonStyle,
              disabled && styles.disabled(type),
              disabled && disabledStyle
            ])}
          >
            {loading && (
              <ActivityIndicator
                style={StyleSheet.flatten([styles.loading, loadingStyle])}
                color={loadingProps.color}
                size={loadingProps.size}
                {...loadingProps}
              />
            )}

            {!loading &&
              icon &&
              !iconRight &&
              renderNode(Icon, icon, {
                containerStyle: StyleSheet.flatten([
                  styles.iconContainer,
                  iconContainerStyle
                ])
              })}

            {!loading && !!title && (
              <Text
                style={StyleSheet.flatten([
                  styles.title(type),
                  titleStyle,
                  disabled && styles.disabledTitle,
                  disabled && disabledTitleStyle
                ])}
                {...titleProps}
              >
                {title}
              </Text>
            )}

            {!loading &&
              icon &&
              iconRight &&
              renderNode(Icon, icon, {
                containerStyle: StyleSheet.flatten([
                  styles.iconContainer,
                  iconContainerStyle
                ])
              })}
          </ViewComponent>
        </TouchableComponent>
      </View>
    );
  }
}

ButtonIcon.propTypes = {
  title: PropTypes.string,
  titleStyle: Text.propTypes.style,
  titleProps: PropTypes.object,
  buttonStyle: ViewPropTypes.style,
  type: PropTypes.oneOf(["solid", "clear", "outline"]),
  loading: PropTypes.bool,
  loadingStyle: ViewPropTypes.style,
  loadingProps: PropTypes.object,
  onPress: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.bool,
    PropTypes.func
  ]),
  iconContainerStyle: ViewPropTypes.style,
  iconRight: PropTypes.bool,
  linearGradientProps: PropTypes.object,
  TouchableComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  ViewComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
  disabledTitleStyle: Text.propTypes.style,
  raised: PropTypes.bool
};

ButtonIcon.defaultProps = {
  title: "",
  iconRight: false,
  TouchableComponent: Platform.select({
    android: TouchableNativeFeedback,
    default: TouchableOpacity
  }),
  onPress: () => console.log("Please attach a method to this component"),
  type: "solid",
  buttonStyle: {
    borderRadius: 3
  },
  disabled: false,
  raised: false,
  loading: false,
};

const styles = {
  button: (type) => ({
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    backgroundColor: type === "solid" ? colors.primary : "transparent",
    padding: 8,
    borderWidth: type === "outline" ? StyleSheet.hairlineWidth : 0,
    borderColor: colors.primary
  }),
  container: {
    borderRadius: 3
  },
  disabled: (type) => ({
    ...conditionalStyle(type === "solid", {
      backgroundColor: colors.disabled
    }),
    ...conditionalStyle(type === "outline", {
      borderColor: color(colors.disabled).darken(0.3)
    })
  }),
  disabledTitle: {
    color: color(colors.disabled).darken(0.3)
  },
  title: (type) => ({
    color: type === "solid" ? "white" : colors.primary,
    fontSize: 16,
    textAlign: "center",
    paddingTop: 2,
    paddingBottom: 1,
    ...Platform.select({
      android: {
        fontFamily: "sans-serif-medium"
      },
      default: {
        fontSize: 18
      }
    })
  }),
  iconContainer: {
    marginHorizontal: 5
  },
  raised: (type) =>
    type !== "clear" && {
      backgroundColor: "#fff",
      ...Platform.select({
        android: {
          elevation: 4
        },
        default: {
          shadowColor: "rgba(0,0,0, .4)",
          shadowOffset: { height: 1, width: 1 },
          shadowOpacity: 1,
          shadowRadius: 1
        }
      })
    },
  loading: {
    marginVertical: 2
  }
};

export default ButtonIcon;
