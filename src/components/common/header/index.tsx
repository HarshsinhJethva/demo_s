import React, { memo, useEffect, useMemo, useState } from 'react';
import { Platform, UIManager, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { Image, StatusBar, Text, Touchable } from '@components';
import Icons from '@assets/icons';

import routes from '@navigation/routes';
import { responsive } from '@utils';
import useStyles from './styles';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  dashboard?: boolean;
  back?: boolean;
  isProfile?: boolean;
  onCalender?: () => void;
  onCart?: () => void;
  onSearch?: () => void;
}

const Header = ({
  title,
  onBack,
  dashboard,
  back,
  isProfile,
  onCalender,
  onCart,
  onSearch,
}: HeaderProps) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { colors } = useTheme();

  const styles = useStyles();

  const profileHandler = () => {
    navigation.navigate(routes.app.account.accountRoot);
  };

  const closeHandler = () => {
    if (onBack) {
      onBack();
    } else {
      navigation.goBack();
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={dashboard ? colors.secondary : colors.white}
        barStyle={dashboard ? 'light-content' : 'dark-content'}
      />
      <View
        style={[
          styles.wrapper,
          { backgroundColor: dashboard ? colors.secondary : colors.primary },
        ]}
      >
        <View style={[styles.actionWrapper]}>
          {back ? (
            <Touchable style={styles.closeWrapper} onPress={closeHandler}>
              <Icons.Back
                height={responsive.height(2.4)}
                width={responsive.height(2.4)}
                fill={dashboard ? colors.white : colors?.secondary}
              />
            </Touchable>
          ) : null}
          {title && (
            <View style={[styles.titleWrapper]}>
              <Text
                value={t(title)}
                style={[
                  styles.label,
                  { color: dashboard ? colors.white : colors?.secondary },
                ]}
                bold
              />
            </View>
          )}
          {isProfile && dashboard && (
            <View style={{ paddingVertical: responsive.height(2) }}>
              <Text value={'Shop Name'} style={styles.shopName} />
              <Text
                value={'Shop Address Details'}
                bold
                style={styles.shopAddress}
              />
            </View>
          )}
        </View>

        <View style={[styles.actionWrapper, styles.rightActionWrapper]}>
          
        </View>
      </View>
    </>
  );
};

export default memo(Header);
