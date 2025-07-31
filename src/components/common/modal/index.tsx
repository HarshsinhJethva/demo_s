import React, { memo } from 'react';
import {
  View,
  StyleSheet,
  Modal as RNModal,
  ModalProps as RNModalProps,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

interface ModalProps extends RNModalProps {
  onClose?: () => void;
}

const Modal = ({ visible, children, onClose, ...rest }: ModalProps) => {
  if (!visible) return null;

  const styles = useStyles();

  return (
    <RNModal
      {...rest}
      transparent
      statusBarTranslucent
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        {children}
      </View>
    </RNModal>
  );
};

export default memo(Modal);

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    overlay: {
      backgroundColor: colors.primaryA0,
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
