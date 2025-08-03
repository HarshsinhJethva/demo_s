import React, { JSX, memo } from 'react';
import { StyleSheet, TouchableOpacityProps } from 'react-native';
import { useTheme } from '@react-navigation/native';

import useGlobalStyles from '@assets/styles';
import { responsive } from '@utils';
import { Touchable } from '@components';

interface CardContainerProps extends TouchableOpacityProps {
  children: JSX.Element | JSX.Element[];
}

const CardContainer = ({ children, ...rest }: CardContainerProps) => {
  const styles = useStyles();
  return (
    <Touchable
      {...rest}
      style={[
        styles.wrapper,
        Array.isArray(rest?.style)
          ? rest?.style
          : rest?.style && { ...rest?.style },
      ]}
    >
      {children}
    </Touchable>
  );
};

export default memo(CardContainer);

const useStyles = () => {
  const { colors } = useTheme();
  const { shadow } = useGlobalStyles();

  return StyleSheet.create({
    wrapper: {
      ...shadow,
      marginHorizontal: responsive.width(2),
      paddingHorizontal: responsive.height(1.6),
      paddingVertical:responsive.height(0.8),
      borderRadius: responsive.height(1),
      backgroundColor: colors.white,
    },
  });
};
