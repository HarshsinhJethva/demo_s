import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Text, Touchable } from '@components';
import { responsive } from '@utils';

interface CheckButtonProps {
  label: string;
  active: boolean;
  setActive: () => void;
}

const CheckButton = ({ label, active, setActive }: CheckButtonProps) => {
  const styles = useStyles();

  return (
    <Touchable
      disabled={active}
      onPress={setActive}
      style={[styles.wrapper, active && styles.activeWrapper]}
    >
      <Text
        value={label}
        style={[styles.label, active && styles.activeLabel]}
        semibold
      />
    </Touchable>
  );
};

export default memo(CheckButton);

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    wrapper: {
      flex: 1,
      padding: responsive.height(1.5),
      borderRadius: responsive.height(2),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: responsive.height(0.1),
      backgroundColor: colors.white,
      borderColor: colors.gray,
    },
    activeWrapper: {
      backgroundColor: colors.primaryA0,
      borderColor: colors.primaryA0,
    },
    label: {
      fontSize: responsive.fontSize.heading,
      color: colors.black,
    },
    activeLabel: {
      color: colors.primary,
    },
  });
};
