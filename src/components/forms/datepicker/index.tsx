import React, {
  Dispatch,
  SetStateAction,
  memo,
  useMemo,
  useState,
} from 'react';
import { TouchableOpacity, Keyboard, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import Icons from '@assets/icons';
import {
  Text,
  Touchable,
  FieldError,
  FieldTitle,
  CalendarModel,
} from '@components';

import { helpers, responsive } from '@utils';
import useStyles from './styles';

interface DatePickerProps {
  onDateChange?(props: any): void;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  selectedDate?: Date | undefined;
  minimumDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  mode?: 'time' | 'date' | 'datetime' | undefined;
  title?: string;
  required?: boolean;
}

const DatePicker = ({
  onDateChange,
  error,
  setError,
  selectedDate,
  minimumDate,
  maxDate,
  disabled,
  title = '',
  required = false,
}: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const { colors, dark } = useTheme();
  const styles = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const dropdownHandler = () => {
    Keyboard.dismiss();
    setOpen(true);
    setError && setError('');
  };

  const onConfirm = (date: Date) => {
    setOpen(false);
    setDate(date);
    onDateChange && onDateChange(date);
  };

  const onCancel = () => {
    setOpen(false);
  };

  const clearHandler = () => {
    setDate(undefined);
    onDateChange && onDateChange(undefined);
  };

  const formattedDate = useMemo(() => {
    return (
      selectedDate && `${helpers.formatDDMMYYYY(selectedDate?.toString())}`
    );
  }, [selectedDate]);

  return (
    <View style={styles.container}>
      <FieldTitle title={t(title)} required={required} />
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.8}
        onPress={dropdownHandler}
        style={[styles.wrapper, disabled && { opacity: 0.5 }]}>
        <View style={styles.iconDateWrapper}>
          <Icons.Calendar2
            height={responsive.height(2.5)}
            width={responsive.height(2.5)}
            fill={colors.secondary}
          />
          <Text
            // value={
            //   formattedDate || t(placeholder) || `${t('select')} ${t(title)}`
            // }
            value={formattedDate || 'DD-MM-YYYY'}
            style={[styles.value, formattedDate && styles.dateValue]}
            medium
          />
        </View>
        {selectedDate && !disabled && (
          <Touchable
            style={styles.closeWrapper}
            disabled={disabled}
            onPress={clearHandler}>
            <Icons.Close
              height={responsive.height(1)}
              width={responsive.height(1)}
            />
          </Touchable>
        )}
      </TouchableOpacity>
      <FieldError error={error} />
      <CalendarModel
        visible={open}
        onClose={onCancel}
        selectedDate={selectedDate || date || new Date()}
        onDateSelected={onConfirm}
        minimumDate={minimumDate?.toString()}
        maxDate={maxDate?.toString()}
      />
    </View>
  );
};

export default memo(DatePicker);
