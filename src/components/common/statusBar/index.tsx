import { memo, useMemo } from 'react';
import {
  View,
  Platform,
  StatusBarProps,
  StatusBar as AppStatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { responsive } from '@utils';

interface AppStatusBarProps extends StatusBarProps {
  backgroundColor?: string;
  absolute?: boolean;
}

const StatusBar = ({
  backgroundColor = 'transparent',
  absolute,
  barStyle = 'dark-content',
  ...props
}: AppStatusBarProps) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();

  const resolvedBackgroundColor = useMemo(() => {
    return backgroundColor || colors.secondary;
  }, [backgroundColor, colors.secondary]);

  const paddingTop = absolute
    ? Platform.OS === 'ios'
      ? insets.top
      : 0
    : Platform.OS === 'ios'
    ? insets.top
    : AppStatusBar.currentHeight || responsive.height(5);

  return (
    <View style={{ backgroundColor: resolvedBackgroundColor, paddingTop }}>
      <AppStatusBar
        translucent
        backgroundColor={resolvedBackgroundColor}
        barStyle={barStyle}
        {...props}
      />
    </View>
  );
};

export default memo(StatusBar);
