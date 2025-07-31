import React, { memo } from 'react';
import { Image as AppImage, ImageProps } from 'react-native';

interface AppImageProps extends ImageProps {}

const Image = ({ ...rest }: AppImageProps) => {
  return <AppImage {...rest} />;
};

export default memo(Image);
