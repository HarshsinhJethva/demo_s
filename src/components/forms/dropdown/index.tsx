import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown as RNEDropdown } from 'react-native-element-dropdown';
import { useTheme } from '@react-navigation/native';
import { FieldError, FieldTitle, SvgIcon } from '@components';
import useStyles from './styles';
import fonts from '@assets/fonts';
import { responsive } from '@utils';

type ItemType = {
  label: string;
  value: string;
  subLabel?: string;
};

interface AppDropdownProps {
  data: ItemType[];
  title?: string;
  placeholder?: string;
  required?: boolean;
  value: ItemType | undefined;
  setValue: (val: ItemType | undefined) => void;
  error: string;
  setError: (val: string) => void;
  disable?: boolean;
}

const Dropdown = ({
  data,
  title,
  placeholder,
  required,
  value,
  setValue,
  error,
  setError,
  disable,
}: AppDropdownProps) => {
  const { colors } = useTheme();
  const styles = useStyles();
  const [selected, setSelected] = useState<string | undefined>(value?.value);

  useEffect(() => {
    setSelected(value?.value);
  }, [value]);

  const onChangeValue = (item: ItemType) => {
    setError('');
    setSelected(item.value);
    setValue(item);
  };

  return (
    <View>
      <FieldTitle title={title ?? ''} required={required} />
      <RNEDropdown
        data={data}
        labelField="label"
        valueField="value"
        value={selected}
        placeholder={placeholder || `Select ${title}`}
        onChange={onChangeValue}
        disable={disable}
        style={[styles.dropdown, { opacity: disable ? 0.5 : 1 }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        containerStyle={styles.dropDownContainerStyle}
        inputSearchStyle={styles.inputSearchStyle}
        itemTextStyle={{
          fontFamily: fonts.regular,
          fontSize: responsive.fontSize.bitSmall,
        }}
        renderRightIcon={() => (
          <View style={styles.renderRightIconView}>
            {/* {value && (
              <TouchableOpacity
                onPress={clearSelection}
                style={styles.valueClose}>
                <CustomImage name="CLOSE" variant="close" />
              </TouchableOpacity>
            )} */}
            <SvgIcon
              name="DownArrow"
              // variant="small"
              height={responsive.height(2.5)}
              width={responsive.width(5)}
              fill={colors.gray}
            />
          </View>
        )}
        //       />
      />
      <FieldError error={error} />
    </View>
  );
};

export default Dropdown;
