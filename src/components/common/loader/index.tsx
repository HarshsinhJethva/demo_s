import React, { memo } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Text } from '@components';
import { responsive } from '@utils';

interface LoaderProps {
  message?: string;
}

const Loader = ({ message }: LoaderProps) => {
  const { colors } = useTheme();
  const styles = useStyles();

  return (
    <View style={styles.wrapper}>
      <View style={styles.loaderWrapper}>
        <ActivityIndicator size="large" color={colors.secondary} />
        <Text value={message || 'Loading...'} medium style={styles.label} />
      </View>
    </View>
  );
};

export default memo(Loader);

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    wrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.overlay,
    },
    loaderWrapper: {
      backgroundColor: colors.primary,
      padding: responsive.height(5),
      paddingVertical: responsive.height(3),
      borderRadius: responsive.height(2),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      columnGap: responsive.width(3),
      maxWidth: responsive.width(90),
    },
    label: {
      fontSize: responsive.fontSize.heading,
    },
  });
};
