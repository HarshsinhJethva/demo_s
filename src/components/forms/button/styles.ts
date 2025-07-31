import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { responsive } from '@utils';
// import useGlobalStyles from '@assets/styles';

const useStyles = () => {
  const { colors } = useTheme();
  // const { floatButton } = useGlobalStyles();

  return StyleSheet.create({
    wrapper: {
      marginTop: responsive.height(3),
      borderRadius: responsive.height(1.5),
      justifyContent: 'center',
      alignItems: 'center',
      height: responsive.height(5),
      // ...floatButton,
      backgroundColor: colors.secondary,
    },
    label: {
      color: colors.white,
      textTransform: 'capitalize',
      fontSize: responsive.height(2),
    },
    bottom: {
      position: 'absolute',
      bottom: responsive.height(4),
      left: responsive.width(5),
      right: responsive.width(5),
    },
    disabled: {
      backgroundColor: colors.disableButon,
    },
  });
};

export default useStyles;
