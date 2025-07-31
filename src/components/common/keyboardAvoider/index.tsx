import { useFocusEffect } from '@react-navigation/native';
import React, { memo, useCallback } from 'react';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from '@react-navigation/native';

interface KeyboardAvoiderProps extends KeyboardAwareScrollViewProps {}

const KeyboardAvoider: React.FC<KeyboardAvoiderProps> = ({
  children,
  bounces = true,
  contentContainerStyle,
  extraScrollHeight,
  onScroll,
}) => {
  const { colors } = useTheme();

  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setAdjustPan();
    return () => {
      AvoidSoftInput.setDefaultAppSoftInputMode();
    };
  }, []);

  useFocusEffect(onFocusEffect);

  return (
    <KeyboardAwareScrollView
      onScroll={onScroll}
      bounces={bounces}
      contentContainerStyle={contentContainerStyle}
      style={{ backgroundColor: colors.primary }}
      // extraScrollHeight={extraScrollHeight}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      enableOnAndroid={true}
      enableResetScrollToCoords={false}
      contentInsetAdjustmentBehavior="always"
      overScrollMode="always">
      {children}
    </KeyboardAwareScrollView>
  );
};

export default memo(KeyboardAvoider);
