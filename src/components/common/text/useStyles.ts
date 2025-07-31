import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import fonts from '@assets/fonts';
import { responsive } from '@utils';

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    label: {
      color: colors.black,
      fontSize: responsive.fontSize.regular,
      fontFamily: fonts.regular,
    },
  });
};
export default useStyles;
