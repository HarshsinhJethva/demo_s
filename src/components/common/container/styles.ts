import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { responsive } from '@utils';

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    formContainer: {
      flexGrow: 1,
      backgroundColor: colors.primary,
      paddingBottom: responsive.height(10),
    },
  });
};

export default useStyles;
