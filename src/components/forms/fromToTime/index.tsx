import React, { Dispatch, memo, SetStateAction } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { FieldError, FieldTitle, Text, TimePicker } from '@components';
import useStyles from './styles';

interface FromToTimeProps {
  title?: string;
  required?: boolean;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  fromTime: Date | undefined;
  setFromTime: Dispatch<SetStateAction<Date | undefined>>;
  toTime: Date | undefined;
  setToTime: Dispatch<SetStateAction<Date | undefined>>;
  disabled?: boolean;
}

const FromToTime = ({
  title,
  required,
  error,
  setError,
  fromTime,
  setFromTime,
  toTime,
  setToTime,
  disabled,
}: FromToTimeProps) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const fromTimeHandler = (date: Date) => {
    setFromTime(date);
    setError('');
  };

  const toTimeHandler = (date: Date) => {
    setToTime(date);
    setError('');
  };

  return (
    <>
      <FieldTitle title={title} required={required} />
      <View style={styles.wrapper}>
        <TimePicker
          date={fromTime}
          setDate={fromTimeHandler}
          disabled={disabled}
        />
        <Text value={t('to')} />
        <TimePicker date={toTime} setDate={toTimeHandler} disabled={disabled} />
      </View>
      <FieldError error={error} />
    </>
  );
};

export default memo(FromToTime);
