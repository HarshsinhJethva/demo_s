import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Text } from '@components';

interface FieldErrorProps {
  error: string | undefined;
}

const FieldError = ({ error }: FieldErrorProps) => {
  if (!error || error === '') return null;

  const styles = useStyles();

  return <Text value={error} style={styles.error} />;
};

export default memo(FieldError);

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    error: {
      textAlign: 'right',
      color: colors.error,
    },
  });
};
