import { StyleSheet } from 'react-native';

import { useTheme } from '@react-navigation/native';
import { responsive } from '@utils';

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    conatainer: {
      paddingHorizontal: responsive.height(1.6),
    },
    plie: {
      position: 'absolute',
      alignSelf: 'center',
      fontSize: responsive.height(5),
    },
    forgotText: {
      alignSelf: 'flex-end',
    },
    wrapperStyles: {
      alignSelf: 'flex-end',
      paddingHorizontal: responsive.height(2.4),
      paddingVertical: responsive.height(0.8),
      backgroundColor: '#21D393',
    },
    signUpVIew: {
      flexDirection: 'row',
      marginVertical: responsive.height(1.4),
      gap: responsive.height(0.2),
      alignSelf: 'flex-end',
    },
    saperator: { borderWidth: 0.5, width: '34%' },
    orSingUpView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      gap: responsive.height(1),
      marginVertical: responsive.height(3),
    },
    svgStyle: {
      height: responsive.height(4.4),
      width: responsive.height(4.4),
    },
    svgView: {
      alignItems: 'center',
      alignSelf: 'center',
      gap: responsive.height(0.5),
      flexDirection: 'row',
    },
  });
};

export default useStyles;
