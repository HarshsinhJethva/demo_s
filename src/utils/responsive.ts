import { Dimensions, PixelRatio } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const width = (widthPercent: number) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const height = (heightPercent: number) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const fontSize = {
  regular: height(1.6),
  heading: height(2),
  heading2: height(2.5),
  title: height(1.8),
  smallTitle: height(1.7),
  label: height(1.6),
  bitSmall: height(1.4),
  small: height(1.3),
  extraSmall: height(1.2),
  large: height(3),
  count: height(4),
};

export default { height, width, fontSize };
