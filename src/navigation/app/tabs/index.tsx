import { StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import routes from '@navigation/routes';

import { useTheme } from '@react-navigation/native';
import icons from '@assets/icons';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { responsive } from '@utils';
import Icons from '@assets/icons';
import Dashboard from '@screens/app/dashoard';
import Events from '@screens/app/event';
import Favorite from '@screens/app/favorite';
import User from '@screens/app/user';

const BottomTab = createBottomTabNavigator();

const screenOptions = (
  colors: any,
): (({ route }: { route: any }) => BottomTabNavigationOptions) => {
  const insets = useSafeAreaInsets();

  return ({ route }) => ({
    unmountOnBlur: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarActiveTintColor: colors.secondary,
    tabBarInactiveTintColor: colors.black,
    // tabBarStyle: {height: vs(60), paddingBottom: vs(5)},
    tabBarStyle: {
      height: responsive.height(6) + insets.bottom,
      paddingBottom: insets.bottom,
    },

    animationEnabled: false,
    // animation:"shift",
    tabBarIcon: ({ focused, color, size }) => {
      let IconComponent;

      switch (route.name) {
        case routes.app.dashboard.dashboardRoot:
          IconComponent = Icons.Bs;
          break;
        case routes.app.events.eventsRoot:
          IconComponent = Icons.Bc;
          break;
        case routes.app.favorite.favoriteRoot:
          IconComponent = Icons.Bl;
          break;
        case routes.app.user.userRoot:
          IconComponent = Icons.Bu;
          break;

        default:
          return null;
      }

      return (
        <IconComponent
          width={responsive.width(5)}
          height={responsive.height(5)}
          fill={focused ? colors.secondary : colors.black}
        />
      );
    },
  });
};

const Tabs = () => {
  const { colors } = useTheme();

  return (
    <BottomTab.Navigator
      screenOptions={screenOptions(colors)}
      initialRouteName={routes.app.dashboard.dashboardRoot}
    >
      <BottomTab.Screen
        name={routes.app.dashboard.dashboardRoot}
        component={Dashboard}
        options={{ tabBarLabel: 'Search' }}
        // lazy={false}
      />

      <BottomTab.Screen
        name={routes.app.events.eventsRoot}
        component={Events}
        options={{ tabBarLabel: 'Events' }}
      />
      <BottomTab.Screen
        name={routes.app.favorite.favoriteRoot}
        component={Favorite}
        options={{ tabBarLabel: 'Favorite' }}
      />
      <BottomTab.Screen
        name={routes.app.user.userRoot}
        component={User}
        options={{ tabBarLabel: 'Profile' }}
      />
    </BottomTab.Navigator>
  );
};

export default memo(Tabs);
