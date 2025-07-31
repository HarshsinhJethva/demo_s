import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

import fonts from '@assets/fonts';
import { responsive } from '@utils';

const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    dropdown: {
      height: responsive.height(5),
      borderColor: colors.gray,
      borderWidth: responsive.height(0.1),
      borderRadius: responsive.height(1),
    },
    placeholderStyle: {
      fontSize: responsive.height(1.6),
      marginHorizontal: responsive.width(1.8),
      textTransform: 'capitalize',
      color: colors.gray,
      fontFamily: fonts.medium,
    },
    selectedTextStyle: {
      fontSize: responsive.height(1.6),
      marginHorizontal: responsive.width(1.8),
      fontFamily: fonts.medium,
      color: colors.black,
    },
    iconStyle: {
      width: responsive.width(5),
      height: responsive.height(2.5),
      marginHorizontal: responsive.width(2),
    },
    inputSearchStyle: {
      borderRadius: responsive.height(1),
      fontFamily: fonts.regular,
    },

    itemWrapper: {
      padding: responsive.height(2),
    },
    itemTextStyle: {
      fontSize: responsive.height(1.6),
      fontFamily: fonts.regular,
      color: colors.black,
    },
    subValue: {
      color: colors.grayF5,
    },
    listEmptyComponent: {
      margin: responsive.height(2),
    },
    containerStyle: {
      borderRadius: responsive.height(1),
    },
    renderRightIconView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: responsive.width(0.8),
    },
    valueClose: {
      backgroundColor: colors.grayF5,
      padding: responsive.height(0.4),
      borderRadius: responsive.height(1),
      marginHorizontal: responsive.height(0.4),
    },
    dropDownContainerStyle: {
      borderColor: colors.white,
      borderWidth: responsive.height(0.1),
      borderRadius: responsive.height(1),
      marginTop: responsive.height(0.2),
      // zIndex: 1000,
      backgroundColor: colors.white,
      height: responsive.height(30),
    },
  });
};

export default useStyles;
