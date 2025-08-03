import { StyleSheet } from 'react-native';

import { useTheme } from '@react-navigation/native';
import { responsive } from '@utils';

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    conatainer: {
      backgroundColor: colors.white,
      padding: responsive.height(2),
      marginBottom: responsive.height(3),
    },
    name: {
      fontSize: responsive.fontSize.heading2,
    },
    nameDetails: {
      color: colors.gray,
    },
    image: {
      height: responsive.height(8),
      width: responsive.height(8),
      borderRadius: responsive.height(1),
    },
    event_name: {
      // fontWeight: '500',
    },
    containerView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    event_price_from: {
      color: '#34A853',
    },
    not: {
      backgroundColor: colors.grayF5,
      borderRadius: responsive.height(0.5),
      padding: responsive.height(0.5),
      alignSelf: 'center',
    },
    lastView: {
      alignItems: 'flex-end',
      gap: responsive.height(1),
    },
    svgLastView: { flexDirection: 'row', gap: responsive.height(1) },
    svgLast: {
      height: responsive.height(2),
      width: responsive.height(2),
    },
  });
};

export default useStyles;
