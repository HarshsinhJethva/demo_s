import React, { Dispatch, memo, SetStateAction } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { FieldError, FieldTitle, Text, TimePicker } from '@components';
import useStyles from './styles';
import Datepicker from '../datepicker';

interface DateAndTimeProps {
  title?: string;
  required?: boolean;
  error?: string;
  setError?: Dispatch<SetStateAction<string>>;
  date?: Date | undefined | null;
  setDate?: Dispatch<SetStateAction<Date | undefined | null>>;
  time?: Date | undefined | null;
  setTime?: Dispatch<SetStateAction<Date | undefined | null>>;
  disabled?: boolean;
}

const DateAndTime = ({
  title,
  required,
  error,
  setError,
  date,
  setDate,
  time,
  setTime,
  disabled,
}: DateAndTimeProps) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const dateHandler = (date: Date) => {
    setDate && setDate(date);
    setError && setError('');
  };

  const timeHandler = (date: Date) => {
    setTime && setTime(date);
    setError && setError('');
  };

  return (
    <>
      <FieldTitle title={title} required={required} />
      <View style={styles.wrapper}>
        {date !== undefined && (
          <Datepicker
            selectedDate={date || undefined}
            onDateChange={dateHandler}
            disabled={disabled}
          />
        )}
        {time !== undefined && (
          <TimePicker
            date={time || undefined}
            setDate={timeHandler}
            disabled={disabled}
            style={[styles.time, date === undefined && styles.noDateTime]}
          />
        )}
      </View>
      <FieldError error={error} />
    </>
  );
};

export default memo(DateAndTime);
