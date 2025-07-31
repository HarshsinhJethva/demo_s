import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { FieldError, FieldTitle, TimePicker } from '@components';
import { responsive } from '@utils';

interface DateFieldProps {
  title?: string;
  required?: boolean;
  error: string;
  setError: (date: string) => void;
  date: Date | undefined;
  minimumDate?: Date | undefined;
  setDate: (date: Date) => void;
  mode: 'date' | 'time';
  disabled?: boolean;
  close?: boolean;
  calender?: boolean;
}

const DateField = ({
  title,
  required,
  date,
  setDate,
  error,
  setError,
  mode,
  disabled,
  minimumDate,
  close,
  calender,
}: DateFieldProps) => {
  const styles = useStyles();

  const dateHandler = (date: Date) => {
    setError && setError('');
    setDate && setDate(date);
  };

  return (
    <View style={styles.wrapper}>
      <FieldTitle title={title} required={required} />
      <TimePicker
        date={date}
        setDate={dateHandler}
        mode={mode}
        disabled={disabled}
        close={close}
        minimumDate={minimumDate || undefined}
        calender={calender}
      />
      <FieldError error={error} />
    </View>
  );
};

export default memo(DateField);

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      marginVertical: responsive.height(0.4),
    },
  });
};
