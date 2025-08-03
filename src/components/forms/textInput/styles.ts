import { StyleSheet } from 'react-native';

import { useTheme } from '@react-navigation/native';
import fonts from '@assets/fonts';
import { responsive } from '@utils';

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    inputWrapper: {
      height: responsive.height(5),
      borderColor: colors.gray,
      // borderWidth: responsive.height(0.1),
      borderRadius: responsive.height(1),
      flexDirection: 'row',
      backgroundColor: colors.primary,
    },
    input: {
      flex: 1,
      fontSize: responsive.fontSize.regular,
      color: colors.black,
      marginHorizontal: responsive.width(0.8),
      fontFamily: fonts.medium,
      height: responsive.height(5),
      paddingVertical: 0,
      lineHeight: responsive.height(2),
      alignItems: 'center',
      alignSelf: 'center',
    },
    notEditableInput: {
      color: colors.grayF5,
    },
    multilineWrapper: {
      height: responsive.height(15),
    },
    multiline: {
      marginVertical: responsive.height(0.5),
    },
    notEditable: {
      borderColor: colors.grayF5,
    },
    closeEye: {
      marginHorizontal: responsive.width(1.6),
      justifyContent: 'center',
    },
  });
};

export default useStyles;
