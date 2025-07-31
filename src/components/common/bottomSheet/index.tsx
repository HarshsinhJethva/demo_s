import React, { ReactElement, forwardRef, memo, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

import useStyles from './styles';
import { BottomSheetProps } from './types';
import { useBottomSheetBackHandler } from 'src/hooks';
// import ToastMessage from '../toastMessage';

const BottomSheet = forwardRef(
  (
    {
      children,
      height,
      noHandle,
      onDismiss,
      list = false,
      disable = false,
      ...rest
    }: BottomSheetProps,
    ref: any,
  ): ReactElement => {
    const snapPoints = useMemo((): string[] | number[] => height, [height]);
    const { handleSheetPositionChange } = useBottomSheetBackHandler(ref);
    const styles = useStyles();

    const renderBackdrop = (): ReactElement => {
      return (
        <TouchableOpacity
          activeOpacity={1}
          disabled={disable}
          onPress={() => ref?.current?.close()}
          style={styles.renderBackdrop}>
          {/* <ToastMessage /> */}
        </TouchableOpacity>
      );
    };

    const handleComponent = (): ReactElement | null => {
      if (noHandle) return null;
      return (
        <View style={styles.closeLineContainer}>
          <View style={styles.closeLine}></View>
        </View>
      );
    };

    return (
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetColor}
        ref={ref}
        index={0}
        onChange={handleSheetPositionChange}
        onDismiss={onDismiss}
        snapPoints={height?.length > 0 ? snapPoints : undefined}
        android_keyboardInputMode="adjustPan"
        keyboardBehavior="extend"
        enableDynamicSizing={height?.length > 0 ? false : true}
        backdropComponent={renderBackdrop}
        style={[styles.bottomSheet, noHandle && styles.noHandleBottomSheet]}
        handleComponent={handleComponent}
        {...rest}>
        {list ? (
          children
        ) : (
          <BottomSheetView style={styles.contentContainer} focusable>
            {children}
          </BottomSheetView>
        )}
        {/* <ToastMessage /> */}
      </BottomSheetModal>
    );
  },
);

export default memo(BottomSheet);
