import React, { memo, useState } from 'react';
import { Keyboard, View, ViewStyle } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useTheme } from '@react-navigation/native';

import Icons from '@assets/icons';
import { Text, Touchable } from '@components';
import useStyles from './styles';
import { responsive } from '@utils';

interface TimePickerProps {
  date: Date | undefined;
  minimumDate?: Date | undefined;
  setDate: (date: Date | undefined) => void;
  mode: 'date' | 'time';
  disabled?: boolean;
  calender?: boolean;
  close?: boolean;
  wrapperstyles?: ViewStyle;
  downArrow?: boolean;
}

const NewTimePicker = ({
  date,
  setDate,
  mode,
  disabled,
  minimumDate,
  calender,
  close,
  wrapperstyles,
  downArrow,
}: TimePickerProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const { colors } = useTheme();
  const styles = useStyles();

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-GB', options);
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const onConfirm = (date: Date) => {
    setOpen(false);
    setDate(date);
  };

  const onCancel = () => {
    setOpen(false);
  };

  const clearHandler = () => {
    setDate(undefined);
  };

  const openHandler = () => {
    Keyboard.dismiss();
    setOpen(true);
  };

  return (
    <>
      <Touchable
        onPress={openHandler}
        style={[styles.wrapper, wrapperstyles, disabled && { opacity: 0.5 }]}
        disabled={disabled}
      >
        <View style={styles.iconTimeWrapper}>
          <Text
            value={
              date
                ? mode === 'date'
                  ? formatDate(date)
                  : formatTime(date)
                : mode === 'date'
                ? 'Today'
                : '00:00'
            }
            color={date ? colors.black : colors.gray}
            medium
            style={styles.value}
          />
          {calender && (
            <Icons.Calender
              height={responsive.height(2.5)}
              width={responsive.height(2.5)}
              fill={colors.gray}
            />
          )}
        </View>
        {/* {!disabled && date && close && (
          <Touchable style={styles.closeWrapper} onPress={clearHandler}>
            <Icons.CLOSE height={vs(10)} width={vs(10)} />
          </Touchable>
        )} */}
        {/* {downArrow && <Icons.DOWNARROW2 height={vs(24)} width={vs(24)} />} */}
      </Touchable>
      <DatePicker
        modal
        mode={mode || 'time'}
        open={open}
        date={date || minimumDate || new Date()}
        onConfirm={onConfirm}
        onCancel={onCancel}
        minimumDate={minimumDate}
      />
    </>
  );
};

export default memo(NewTimePicker);
