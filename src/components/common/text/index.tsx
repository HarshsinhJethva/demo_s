import React, { memo } from 'react';
import { ColorValue, Text as RNText, TextProps } from 'react-native';

import fonts from '@assets/fonts';
import useStyles from './useStyles';

interface AppTextProps extends TextProps {
  value: string | number;
  bold?: boolean;
  semibold?: boolean;
  medium?: boolean;
  centered?: boolean;
  color?: ColorValue;
}

const Text = ({
  value,
  bold,
  semibold,
  medium,
  centered,
  style,
  color,
  ...rest
}: AppTextProps) => {
  const styles = useStyles();

  return (
    <RNText
      style={[
        styles.label,
        bold && { fontFamily: fonts.bold },
        semibold && { fontFamily: fonts.semibold },
        medium && { fontFamily: fonts.medium },
        centered && { textAlign: 'center' },
        style,
        {
          includeFontPadding: false,
          textAlignVertical: 'center',
        },
        color && { color },
      ]}
      {...rest}
      allowFontScaling={false}>
      {value}
    </RNText>
  );
};

export default memo(Text);
