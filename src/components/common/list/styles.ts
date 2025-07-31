import { responsive } from '@utils';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      flexGrow: 1,
      rowGap: responsive.height(2),
      paddingBottom: responsive.height(15),
    },
    listEmptyWrapper: {
      marginHorizontal: responsive.width(5),
      marginTop: responsive.height(2),
    },
    container: {
      marginBottom: responsive.height(-1),
    },
  });
};
export default useStyles;
