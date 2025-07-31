import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { responsive } from '@utils';
// import useGlobalStyles from '@assets/styles';

const useStyles = () => {
  const { colors } = useTheme();
  // const { shadow2 } = useGlobalStyles();

  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      columnGap: responsive.width(1.6),
      backgroundColor: colors.secondary,
      marginBottom: responsive.height(1),
    },
    titleWrapper: {
      // flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // flex: 8,
      justifyContent: 'center',
      paddingVertical: responsive.height(1.5),
    },
    label: {
      fontSize: responsive.fontSize.heading,
      // color:colors.white,
    },
    logoWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: responsive.width(5),
      height: responsive.width(10),
      width: responsive.width(10),
      // backgroundColor: colors.primary4,
    },
    logo: {
      height: responsive.width(10),
      width: responsive.width(10),
      borderRadius: responsive.width(5),
    },
    leftDashboardWrapper: {
      flex: 1,
    },
    dashboardCenterWrapper: {
      // flex: 4,
      justifyContent: 'flex-start',
      paddingVertical: responsive.height(1.5),
    },
    rightDashboardWrapper: {},
    actionWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: responsive.width(1.6),
      flex: 3,
      paddingLeft: responsive.width(5),
      // borderWidth: 1,
    },
    rightActionWrapper: {
      justifyContent: 'flex-end',
      paddingRight: responsive.width(5),
      paddingLeft: 0,
    },
    action: {
      justifyContent: 'center',
      alignItems: 'center',
      // padding: responsive.height(1),
      borderRadius: responsive.height(5),

      height: responsive.width(10),
      width: responsive.width(10),
      // backgroundColor: colors.primary4,
    },
    bellCount: {
      height: responsive.height(2),
      width: responsive.height(2),
      borderRadius: responsive.height(2),
      backgroundColor: colors.error,
      position: 'absolute',
      top: responsive.height(-0),
      right: responsive.height(-0),
      justifyContent: 'center',
      alignItems: 'center',
      padding: responsive.height(0.2),
    },
    count: {
      fontSize: responsive.fontSize.extraSmall,
      color: colors.primary,
    },
    filterContainer: {
      padding: responsive.height(1),
      borderRadius: responsive.height(5),
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: responsive.width(1.6),

      height: responsive.width(10),
      width: responsive.width(10),
      // backgroundColor: colors.primary4,
    },
    filterWrapper: {
      backgroundColor: colors.primary,
      padding: responsive.height(1),
      borderRadius: responsive.height(1),
    },
    closeWrapper: {
      // height: responsive.width(10),
      // width: responsive.width(10),
      // backgroundColor: colors.black,

      borderRadius: responsive.height(5),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionWrapper2: {
      padding: responsive.height(1),
      borderRadius: responsive.height(1),
      flexDirection: 'row',
      columnGap: responsive.width(1.6),
      alignItems: 'center',
      paddingLeft: responsive.width(2),
      // ...shadow2,
      // backgroundColor: colors.primary4,
    },
    closeFormWrapper: {
      backgroundColor: colors.primary,
    },
    viewAllWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: responsive.width(1.6),
    },
    viewAll: {
      color: colors.secondary,
    },
    backTitleWrapper: {
      flex: 1,
      flexDirection: 'row',
      columnGap: responsive.width(1.6),
      paddingVertical: responsive.height(1),
    },
    saveWrapper: {
      padding: responsive.height(0.5),
    },
    save: {
      // color: colors.purple,
      fontSize: responsive.fontSize.heading,
    },
    uploadWrapper: {
      padding: responsive.height(0.8),
    },
    filterDot: {
      height: responsive.height(1),
      width: responsive.height(1),
      borderRadius: responsive.height(1),
      backgroundColor: colors.error,
      position: 'absolute',
      right: responsive.width(1.5),
      top: responsive.height(1),
    },
    shopName: {
      fontSize: responsive.fontSize.bitSmall,
      color: colors.white,
    },
    shopAddress: {
      fontSize: responsive.fontSize.regular,
      color: colors.white,
    },
  });
};

export default useStyles;
