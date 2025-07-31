import { responsive } from '@utils';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: responsive.width(3),
    },
  });
};

export default useStyles;
