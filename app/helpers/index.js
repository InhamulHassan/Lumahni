import { Dimensions } from 'react-native';
import color from 'color';
import renderNode from './renderNode';
import getIconType from './getIconType';

const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;

const conditionalStyle = (condition, style) => (condition ? style : {});


export {
    renderNode,
    getIconType,
    ScreenWidth,
    ScreenHeight,
    conditionalStyle,
    color,
  };