import React, { memo, Dispatch, SetStateAction } from 'react';
import {
  View,
  TextInputProps,
  TextInput as RNMobileTextInput,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { FieldError, FieldTitle, Text, Touchable } from '@components';
import useStyles from './styles';

interface MobileTextInputProps extends TextInputProps {
  title?: string;
  required?: boolean;
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  error?: string;
  setError?: Dispatch<SetStateAction<string>>;
  editable?: boolean;
}

const MobileTextInput = ({
  title,
  required,
  value,
  onChangeText,
  error,
  setError,
  placeholder,
  editable = true,
  ...rest
}: MobileTextInputProps) => {
  const styles = useStyles();
  const { colors } = useTheme();
  const { t } = useTranslation();

  // Fixed country: India (+91)
  const countryCode = '+91';

  const changeHandler = (v: string) => {
    const sanitizedText = v?.replace(/[^0-9]/g, '');
    onChangeText(sanitizedText);
    if (setError) setError('');
  };

  return (
    <>
      <FieldTitle title={title} required={required} />
      <View style={[styles.inputWrapper, !editable && styles.notEditable]}>
        <Touchable style={styles.codeWrapper} disabled>
          <Text value={countryCode} style={styles.code} medium />
        </Touchable>
        <RNMobileTextInput
          {...rest}
          style={[styles.input, !editable && styles.notEditableInput]}
          value={value}
          onChangeText={changeHandler}
          placeholderTextColor={editable ? colors.gray : colors.gray}
          placeholder={
            placeholder ? t(placeholder) : `${t('Enter')} ${t(title)}`
          }
          keyboardType="decimal-pad"
          editable={editable}
          maxLength={10}
        />
      </View>
      <FieldError error={error} />
    </>
  );
};

export default memo(MobileTextInput);
