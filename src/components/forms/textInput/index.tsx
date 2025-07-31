import React, {
  memo,
  useMemo,
  Dispatch,
  useState,
  useCallback,
  SVGAttributes,
  SetStateAction,
  FunctionComponent,
} from 'react';
import {
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
  TextInputProps,
  TextInput as AppTextInput,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { useTranslation } from 'react-i18next';

import icons from '@assets/icons';
import { FieldError, FieldTitle, Touchable } from '@components';

import useStyles from './styles';
import { responsive } from '@utils';

interface AppTextInputProps extends TextInputProps {
  title?: string;
  required?: boolean;
  secure?: boolean;
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  error?: string;
  setError?: Dispatch<SetStateAction<string>>;
  inputStyle?: StyleProp<TextStyle>;
  wrapperStyles?: ViewStyle;
  LeftIcon?: FunctionComponent<SVGAttributes<SVGElement>>;
  RightIcon?: FunctionComponent<SVGAttributes<SVGElement>>;
  multiline?: boolean;
  digit?: boolean;
  sheet?: boolean;
  onPressLeftIcon?: () => void;
  leftIconStyle?: ViewStyle;
}

const TextInput = ({
  title,
  required,
  secure = false,
  value,
  onChangeText,
  onPressLeftIcon,
  error,
  setError,
  inputStyle,
  wrapperStyles,
  leftIconStyle,
  LeftIcon,
  RightIcon,
  multiline,
  placeholder,
  digit,
  editable = true,
  sheet = false,
  ...rest
}: AppTextInputProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState(secure);

  const styles = useStyles();
  const { colors } = useTheme();
  const { t } = useTranslation();

  const handleEyeIcon = useCallback((): void => {
    setSecureTextEntry(!secureTextEntry);
  }, [secureTextEntry]);

  // const PasswordIcon = useMemo(() => {
  //   return secureTextEntry ? icons.EYESCLOSE : icons.EYESOPEN;
  // }, [secureTextEntry]);

  const changeHandler = (v: string) => {
    if (digit) {
      const sanitizedText = v?.replace(/[^0-9]/g, '');
      onChangeText && onChangeText(sanitizedText);
    } else {
      onChangeText && onChangeText(v);
    }
    setError && setError('');
  };

  const DynamicInput = sheet ? BottomSheetTextInput : AppTextInput;

  return (
    <>
      <FieldTitle title={title} required={required}  />
      <View
        style={[
          styles.inputWrapper,
          multiline && styles.multilineWrapper,
          wrapperStyles,
          !editable && styles.notEditable,
        ]}
      >
        {LeftIcon && (
          <Touchable
            style={[styles.closeEye, leftIconStyle]}
            onPress={onPressLeftIcon}
          >
            <LeftIcon
              height={responsive.height(2.5)}
              width={responsive.width(5)}
            />
          </Touchable>
        )}
        <DynamicInput
          {...rest}
          style={[
            styles.input,
            multiline && styles.multiline,
            inputStyle,
            !editable && styles.notEditableInput,
          ]}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={changeHandler}
          placeholderTextColor={editable ? colors.gray : colors.gray}
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
          placeholder={
            placeholder ? t(placeholder) : `${t('Enter')} ${t(title)}`
          }
          keyboardType={digit ? 'numeric' : rest.keyboardType}
          textContentType={digit ? 'telephoneNumber' : 'none'}
          editable={editable}
          allowFontScaling={false}
        />
        {/* {secure && (
          <Touchable onPress={handleEyeIcon} style={styles.closeEye}>
            <PasswordIcon height={vs(25)} width={vs(25)} />
          </Touchable>
        )} */}
      </View>
      <FieldError error={error} />
    </>
  );
};

export default memo(TextInput);
