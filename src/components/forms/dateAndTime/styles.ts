import { responsive } from '@utils';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: responsive.width(2),
    },
    time: {
      flex: 0.6,
    },
    noDateTime: {
      flex: 1,
    },
  });
};

export default useStyles;
