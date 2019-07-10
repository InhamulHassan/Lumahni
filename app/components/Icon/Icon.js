import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  TouchableHighlight,
  View,
  ViewPropTypes,
  StyleSheet,
  Text as NativeText,
} from 'react-native';
import { getIconType } from '../../helpers';
import { styles } from './styles';

const Icon = props => {
  const {
    type,
    name,
    size,
    color,
    iconStyle,
    underlayColor,
    reverse,
    raised,
    containerStyle,
    reverseColor,
    disabled,
    disabledStyle,
    onPress,
    Component = onPress ? TouchableHighlight : View,
    ...attributes
  } = props;

  const IconComponent = getIconType(type);
  const getBackgroundColor = () => {
    if (reverse) {
      return color;
    }

    return raised ? 'white' : 'transparent';
  };

  return (
    <View style={containerStyle}>
      <Component
        {...attributes}
        underlayColor={reverse ? color : underlayColor || color}
        style={StyleSheet.flatten([
          (reverse || raised) && styles.button,
          (reverse || raised) && {
            borderRadius: size + 4,
            height: size * 2 + 4,
            width: size * 2 + 4,
          },
          raised && styles.raised,
          {
            backgroundColor: getBackgroundColor(),
            alignItems: 'center',
            justifyContent: 'center',
          },
          disabled && styles.disabled,
          disabled && disabledStyle,
        ])}
        {...onPress && { disabled }}
        onPress={onPress}
      >
        <IconComponent
          testID="iconIcon"
          style={StyleSheet.flatten([
            { backgroundColor: 'transparent' },
            iconStyle && iconStyle,
          ])}
          size={size}
          name={name}
          color={reverse ? reverseColor : color}
        />
      </Component>
    </View>
  );
};

Icon.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  Component: PropTypes.func,
  underlayColor: PropTypes.string,
  reverse: PropTypes.bool,
  raised: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  iconStyle: NativeText.propTypes.style,
  onPress: PropTypes.func,
  reverseColor: PropTypes.string,
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
};

Icon.defaultProps = {
  underlayColor: 'white',
  reverse: false,
  raised: false,
  size: 24,
  color: 'black',
  reverseColor: 'white',
  disabled: false,
  type: 'material',
};

export default Icon;