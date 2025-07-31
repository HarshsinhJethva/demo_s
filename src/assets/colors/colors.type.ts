type Color = string;

import '@react-navigation/native';

declare module '@react-navigation/native' {
  export interface ExtendedTheme {
    dark: boolean;
    colors: {
      primary: Color;
      secondary: Color;
      BlueYonderB2: Color;
      primaryA6: Color;
      gray: Color;
      primaryA0: Color;
      blue: Color;
      grayF5: Color;
      violate38: Color;
      selectiveYellow: Color;
      darkLemonLime: Color;
      lavenderIndigo: Color;
      red: Color;
      red1A: Color;
      tuscanRed: Color;
      tuscanRed1A: Color;
      darkLemonLime1A: Color;
      pumpkin: Color;
      pumpkin1A: Color;
      white: Color;
      lightWhite: Color;
      black: Color;
      overlay: Color;
      overlay2: Color;
      transparent: Color;
      error: Color;
      greenLight: Color;
      yellowLight: Color;
      redLight: Color;
      lovenderLight: Color;
      lovenderLight2: Color;
      lightGreen: Color;
    };
  }
  export function useTheme(): ExtendedTheme;
}
