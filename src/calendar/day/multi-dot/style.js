import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.multiDot';

export default function styleConstructor(theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      width: 30,
      height: 30,
      alignItems: 'center',
    },
    text: {
      marginTop: 4,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6,
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
      borderRadius: 15,
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor,
    },
    todayText: {
      color: appStyle.todayTextColor,
    },
    selectedText: {
      color: appStyle.selectedDayTextColor,
    },
    disabledText: {
      color: appStyle.textDisabledColor,
    },
    dot: {
      width: 4,
      height: 4,
      marginTop: Platform.OS === 'android' ? 6 : 8,
      marginLeft: 1,
      marginRight: 1,
      borderRadius: 2,
      opacity: 0,
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor,
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor,
    },
    ...(theme[STYLESHEET_ID] || {}),
  });
}
