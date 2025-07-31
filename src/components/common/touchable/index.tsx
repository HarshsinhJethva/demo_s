import React, { memo } from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';

import { responsive } from '@utils';

interface TouchableProps extends TouchableOpacityProps {}

const hitSlop = {
  bottom: responsive.height(1),
  left: responsive.height(1),
  right: responsive.height(1),
  top: responsive.height(1),
};

const Touchable = ({ ...rest }: TouchableProps) => {
  return (
    <TouchableOpacity
      delayPressIn={0}
      delayPressOut={0}
      activeOpacity={0.8}
      hitSlop={hitSlop}
      {...rest}
    />
  );
};

export default memo(Touchable);
