import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { responsive } from '@utils';

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    wrapper: {
      backgroundColor: colors.primary,
      paddingVertical: responsive.height(2),
      borderRadius: responsive.height(2),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: responsive.height(2),
      rowGap: responsive.height(1),
    },
    message: {
      color: colors.secondary,
    },
  });
};

export default useStyles;
