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
      borderWidth: responsive.height(0.1),
      borderRadius: responsive.height(1),
      flexDirection: 'row',
    },
    input: {
      flex: 1,
      fontSize: responsive.height(1.6),
      color: colors.black,
      marginHorizontal: responsive.width(1.6),
      fontFamily: fonts.medium,
      height: responsive.height(4),
      paddingVertical: 0,
      lineHeight: responsive.height(2),
      alignSelf: 'center',
    },
    notEditableInput: {
      color: colors.black,
    },
    multilineWrapper: {
      height: responsive.height(15),
    },
    multiline: {
      marginVertical: responsive.height(0.5),
    },
    notEditable: {
      borderColor: colors.gray,
    },
    closeEye: {
      marginHorizontal: responsive.width(3),
      justifyContent: 'center',
    },
    sheetWrapper: {
      flex: 1,
      rowGap: responsive.height(2),
      backgroundColor: colors.white,
      paddingHorizontal: responsive.width(5),
    },
    countryWrapper: {
      backgroundColor: colors.black,
      padding: responsive.height(1.5),
      borderRadius: responsive.height(1),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    contentContainerStyle: {
      rowGap: responsive.height(1),
    },
    countryName: {},
    codeWrapper: {
      paddingHorizontal: responsive.width(1.8),
      justifyContent: 'center',
      // borderRightWidth: responsive.height(0.1),
      borderColor: colors.gray,
    },
    code: {
      fontSize: responsive.height(1.6),
    },
  });
};

export default useStyles;
