import React, { ReactElement, memo, useMemo } from 'react';
import { ActivityIndicator, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { Text, Touchable } from '@components';
import useStyles from './styles';

interface ButtonProps {
  label: string;
  onPress?(): void;
  loading?: boolean | undefined;
  wrapperStyles?: ViewStyle;
  isBottom?: boolean;
  disabled?: boolean;
  labelStyle?: TextStyle;
}

const Button = ({
  label = '',
  onPress,
  loading = false,
  isBottom = false,
  wrapperStyles,
  labelStyle,
  disabled,
}: ButtonProps): ReactElement => {
  const { colors } = useTheme();
  const styles = useStyles();
  const { t } = useTranslation();

  const MemoizedButton = useMemo(() => {
    return (
      <Touchable
        disabled={disabled}
        style={[
          styles.wrapper,
          isBottom && styles.bottom,
          wrapperStyles,
          disabled && styles.disabled,
        ]}
        onPress={onPress}
      >
        {!loading && (
          <Text value={t(label)} style={[styles.label, labelStyle]} semibold />
        )}
        {loading && <ActivityIndicator color={colors.white} size="small" />}
      </Touchable>
    );
  }, [label, onPress, loading]);

  return MemoizedButton;
};

export default memo(Button);
