import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Modal from '../modal';
import useGlobalStyles from '@assets/styles';
import { Button, Text } from '@components';
import { responsive } from '@utils';

interface ConfirmModalProps {
  title?: string;
  description: string;
  leftLabel: string;
  rightLabel: string;

  visible: boolean;
  loader?: boolean;
  onClose?: () => void;
  onDone?: () => void;
}

const ConfirmModal = ({
  title,
  description,
  leftLabel,
  rightLabel,
  loader,
  visible,
  onClose,
  onDone,
}: ConfirmModalProps) => {
  if (!visible) return null;

  const styles = useStyles();

  return (
    <Modal visible={visible} onClose={onClose}>
      <View style={styles.wrapper}>
        {title && <Text value={title} style={styles.title} bold />}
        {description !== '' && (
          <Text value={description} style={styles.subTitle} medium />
        )}
        <View style={styles.buttonWrapper}>
          <Button
            label={leftLabel || 'Cancel'}
            labelStyle={styles.cancelLabel}
            wrapperStyles={styles.cancelButton}
            onPress={onClose}
            disabled={loader}
          />
          <Button
            disabled={loader}
            loading={loader}
            label={rightLabel || 'Confirm'}
            wrapperStyles={styles.button}
            onPress={onDone}
          />
        </View>
      </View>
    </Modal>
  );
};

export default memo(ConfirmModal);

const useStyles = () => {
  const { colors } = useTheme();
  const { lightShadow } = useGlobalStyles();

  return StyleSheet.create({
    wrapper: {
      ...lightShadow,
      backgroundColor: colors.white,
      width: '90%',
      paddingHorizontal: responsive.height(1.6),
      paddingTop: responsive.height(1.6),
      paddingBottom: responsive.height(1.6),
      borderRadius: responsive.height(1),
    },
    title: {
      fontSize: responsive.fontSize.heading2,
      alignItems: 'center',
      alignSelf: 'center',
    },
    subTitle: {
      alignItems: 'center',
      alignSelf: 'center',
      textAlign: 'center',
      paddingTop: responsive.height(0.8),
    },
    buttonWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: responsive.width(2),
    },
    button: {
      flex: 1,
      height: responsive.height(4.5),
    },
    cancelButton: {
      flex: 1,
      height: responsive.height(4.5),
      backgroundColor: colors.grayF5,
      elevation: 0,
    },
    cancelLabel: {
      color: colors.secondary,
    },
  });
};
