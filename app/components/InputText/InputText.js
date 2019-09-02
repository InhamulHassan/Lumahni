import React, { Component } from "react";
import PropTypes from "prop-types";
import { Dimensions, Text, View } from "react-native";
import { Icon, Input } from "react-native-elements";
import styles from "./styles";

export default class InputText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      text: ""
    };
  }

  setNativeProps(nativeProps) {
    this.input.setNativeProps(nativeProps);
  }

  handleTextChange = text => {
    const { onChangeText } = this.props;
    this.setState({ text: text });

    if (onChangeText) {
      onChangeText(text);
    }
  };

  static propTypes = {
    inputRed: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.elementType })
    ]),
    color: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    returnKeyType: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    iconRight: PropTypes.shape({
      ...Icon.propTypes
    }),
    iconLeft: PropTypes.shape({
      ...Icon.propTypes
    }),
    blurOnSubmit: PropTypes.bool,
    onSubmitEditing: PropTypes.func,
    ...Input.propTypes
  };

  static defaultProps = {
    placeholder: "Text",
    returnKeyType: "done",
    secureTextEntry: false,
    blurOnSubmit: true
  };

  render() {
    const {
      inputRef,
      color,
      placeholder,
      style,
      iconLeft,
      iconRight,
      blurOnSubmit,
      returnKeyType,
      secureTextEntry,
      onSubmitEditing,
      ...otherProps
    } = this.props;
    const { focused } = this.state;

    let textContainerStyle = [styles.textContainer];
    let textContainerActiveStyle = [styles.textContainer];

    textContainerStyle.push({
      borderColor: color,
      borderWidth: 1
    });

    textContainerActiveStyle.push({
      borderColor: color,
      borderWidth: 2
    });

    return (
      <Input
        ref={inputRef}
        leftIcon={iconLeft}
        rightIcon={iconRight}
        placeholder={placeholder}
        autoCapitalize={"none"}
        onFocus={() => this.setState({ focused: true })}
        onBlur={() => this.setState({ focused: false })}
        onChangeText={this.handleTextChange}
        returnKeyType={returnKeyType}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        containerStyle={focused ? textContainerActiveStyle : textContainerStyle}
        inputContainerStyle={styles.textInputContainer}
        inputStyle={styles.usernameInput}
        underlineColorAndroid="transparent"
        onSubmitEditing={onSubmitEditing} // to focus the next input on submitting (i.e. clicking next)
        blurOnSubmit={blurOnSubmit} // to prevent the keyboard from disappearing
        style={style}
      />
    );
  }
}
