import React, { JSX, memo } from 'react';
import { View, ViewStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { KeyboardAvoider, Loader, StatusBar } from '@components';
import useStyles from './styles';
import Header from '../header';

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
  form?: boolean;
  back?: boolean;
  isProfile?: boolean;
  loader?: boolean;
  loaderMessage?: string;
  renderLoader?: () => React.JSX.Element;
  hideHeader?: boolean;
  containerStyle?: ViewStyle;
  absolute?: boolean;
  dashboard?: boolean;
  onFloatAdd?: () => void;
  onBack?: () => void;
  Calender?: boolean;
  Cart?: boolean;
  Search?: boolean;
}

const Container = ({
  children,
  title,
  form = false,
  back = false,
  isProfile = false,
  loader = false,
  renderLoader,
  loaderMessage,
  hideHeader = false,
  containerStyle,
  absolute,
  dashboard,
  onBack,
  Calender,
  Cart,
  Search,
}: ContainerProps) => {
  const { colors } = useTheme();
  const styles = useStyles();

  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>
      {hideHeader && (
        <StatusBar absolute={absolute} backgroundColor={colors.secondary} />
      )}
      {!hideHeader && (
        <Header
          title={title || ''}
          dashboard={dashboard}
          back={back}
          isProfile={isProfile}
          onBack={onBack}
          Calender={Calender}
          Cart={Cart}
          Search={Search}
        />
      )}
      {form ? (
        <KeyboardAvoider
          contentContainerStyle={{
            ...styles.formContainer,
            ...containerStyle,
          }}
        >
          {children}
        </KeyboardAvoider>
      ) : (
        <View style={[styles.container, containerStyle]}>{children}</View>
      )}
      {renderLoader
        ? renderLoader()
        : loader && <Loader message={loaderMessage} />}
      {/* {onFloatAdd && <FloatButton onPress={onFloatAdd} />} */}
    </View>
  );
};

export default memo(Container);
