import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const useGlobalStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    shadow: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,

      elevation: 24,
    },
    // crmHeaderShadow: {
    //   shadowColor: colors.crmGrayC4,
    //   shadowOffset: {
    //     width: 0,
    //     height: 6,
    //   },
    //   shadowOpacity: 0.24,
    //   shadowRadius: 8.0,

    //   elevation: 12,
    //   backgroundColor: colors.white,
    // },
    floatButton: {
      shadowColor: colors.secondary,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.24,
      shadowRadius: 8.0,

      elevation: 12,
      backgroundColor: colors.white,
    },
    lightShadow: {
      shadowColor: colors.secondary,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.12,
      shadowRadius: 4.0,

      elevation: 5,
      backgroundColor: colors.white,
    },
  });
};

export default useGlobalStyles;
