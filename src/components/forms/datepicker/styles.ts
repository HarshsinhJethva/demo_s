import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { responsive } from '@utils';

const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper: {
      // height: responsive.height(5.5),
      borderColor: colors.gray91,
      borderWidth: responsive.height(0.1),
      borderRadius: responsive.height(1.5),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // paddingHorizontal: responsive.width(2.5),
      padding: responsive.width(2.5),
    },
    iconDateWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: responsive.width(2),
    },
    dateWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      color: colors.black0,
      fontSize: responsive.height(2),
    },
    required: {
      color: colors.red,
      fontSize: responsive.height(2),
    },
    value: {
      color: colors.gray7D,
      fontSize: responsive.height(2),
    },
    dateValue: {
      color: colors.text,
      fontSize: responsive.height(2),
    },
    closeWrapper: {
      backgroundColor: colors.grayB7,
      padding: responsive.height(0.5),
      borderRadius: responsive.height(5),
    },
  });
};

export default useStyles;
