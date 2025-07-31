import icons from '@assets/icons';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface SvgIconOnlyProps extends SvgProps {
  name: keyof typeof icons;
  width?: number;
  height?: number;
  fill?: string;
  style?: ViewStyle;
}

const SvgIcons: React.FC<SvgIconOnlyProps> = ({
  name,
  width,
  height,
  fill,
  style,
  ...props
}) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    console.warn(`SVG icon "${name}" not found.`);
    return null;
  }

  return (
    <View style={style}>
      <SvgIcon width={width} height={height} fill={fill} {...props} />
    </View>
  );
};

export default SvgIcons;
