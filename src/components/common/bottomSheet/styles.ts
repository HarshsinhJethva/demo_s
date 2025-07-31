import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { responsive } from '@utils';

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    renderBackdrop: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.primary,
    },
    bottomSheet: {
      backgroundColor: colors.primary,
      borderTopLeftRadius: responsive.height(2),
      borderTopRightRadius: responsive.height(2),
    },
    noHandleBottomSheet: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    noHandle: {
      paddingTop: responsive.height(1),
    },
    bottomSheetColor: {
      backgroundColor: colors.primary,
    },
    closeLineContainer: {
      alignSelf: 'center',
    },
    closeLine: {
      width: responsive.width(8),
      height: responsive.height(0.5),
      borderRadius: responsive.height(1),
      backgroundColor: colors.black,
      marginTop: 9,
    },
    contentContainer: {
      flex: 1,
      backgroundColor: colors.primary,
    },
  });
};

export default useStyles;
