import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { responsive } from '@utils';

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    wrapper: {
      // flex: 1,
      borderColor: colors.gray,
      borderWidth: responsive.height(0.1),
      borderRadius: responsive.height(1),
      paddingVertical: responsive.height(1),
      paddingHorizontal: responsive.width(1.6),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    value: {
      // fontSize: responsive.fontSize.label,
      fontSize: responsive.height(1.6),
    },
    closeWrapper: {
      backgroundColor: colors.gray,
      padding: responsive.height(0.5),
      borderRadius: responsive.height(5),
    },
    iconTimeWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: responsive.width(10),
      // justifyContent:"space-between"
    },
  });
};

export default useStyles;
