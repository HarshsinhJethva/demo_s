import React, { Dispatch, memo, SetStateAction, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Text, Touchable } from '@components';
import useGlobalStyles from '@assets/styles';
import { responsive } from '@utils';

interface SwitchProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  tabName?: string;
}

const Switch = ({ active, setActive, tabName }: SwitchProps) => {
  const styles = useStyles(active);

  useEffect(() => {
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const toggleHandler = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActive && setActive(prev => !prev);
  };

  return (
    <Touchable
      onPress={toggleHandler}
      style={[styles.wrapper, active && styles.activeWrapper]}
    >
      <View style={styles.dot} />
      <Text
        value={tabName}
        style={[styles.tabName, active && styles.activeTagName]}
        medium
      />
    </Touchable>
  );
};

export default memo(Switch);

const useStyles = (active: boolean) => {
  const { colors } = useTheme();

  return StyleSheet.create({
    wrapper: {
      justifyContent: 'center',
      padding: responsive.height(0.5),
      borderRadius: responsive.height(3),
      // backgroundColor: colors.primaryGreen,
      backgroundColor: active ? colors.grayF5 : colors.secondary,
      borderColor: active ? colors.secondary : colors.grayF5,
      borderWidth: 1,
      paddingRight: responsive.width(6),
      height: responsive.height(3.5),
      paddingLeft: responsive.width(2),
    },
    activeWrapper: {
      alignItems: 'flex-end',
      paddingLeft: responsive.width(6),
      paddingRight: responsive.width(2),
    },
    dot: {
      backgroundColor: active ? colors.secondary : colors.grayF5,
      height: responsive.height(1.6),
      width: responsive.width(3.2),
      borderRadius: responsive.height(1.6),
      justifyContent: 'center',
      // ...crmHeaderShadow,
    },
    tabName: {
      position: 'absolute',
      right: responsive.width(4),
      fontSize: responsive.fontSize.small,
      zIndex: -1,
      color: colors.primary,
      // minWidth:responsive.width(7.8),
    },
    activeTagName: {
      left: responsive.width(4),
    },
  });
};
