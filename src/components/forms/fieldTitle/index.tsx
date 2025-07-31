import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { responsive } from '@utils';
import { Text } from '@components';

interface FieldTitleProps {
  title?: string;
  required?: boolean;
  style?: TextStyle;
  wrapperStyle?: ViewStyle;
}

const FieldTitle = ({
  title,
  required,
  style,
  wrapperStyle,
}: FieldTitleProps) => {
  if (!title || title === '') return null;

  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <View style={[styles.titleWrapper, wrapperStyle]}>
      <Text value={t(title)} style={[styles.title, style]} />
      {required && <Text value={`*`} style={[styles.required, style]} medium />}
    </View>
  );
};

export default memo(FieldTitle);

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    titleWrapper: {
      marginTop: responsive.height(2),
      // marginBottom: responsive.height(0.5),
      marginBottom: responsive.height(0.8),
      flexDirection: 'row',
    },
    title: {
      color: colors.black,
      fontSize: responsive.fontSize.bitSmall,
    },
    required: {
      color: colors.error,
    },
  });
};
