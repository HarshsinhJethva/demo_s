// import { useDispatch } from '@hooks/index';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DefaultTheme, ExtendedTheme, NavigationContainer } from '@react-navigation/native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import AuthNavigator from './auth';
import colors from '@assets/colors';



const darkTheme: ExtendedTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...colors.dark,
    },
    dark: true,
};

const lightTheme: ExtendedTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...colors.light,
    },
    dark: false,
};

const Navigation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    //   const loginData = useSelector(state => state.verifyOtpAndLogin);
    const navigationRef = useRef<any>();
    // const dispatch = useDispatch();

    //   useEffect(() => {
    //     const unsubscribe = NetInfo.addEventListener(state => {
    //       if (!state.isConnected) {
    //         Alert.alert('No Internet', 'Please turn on the Internet');

    //       }
    //     });

    //     return () => {
    //       unsubscribe(); 
    //     };
    //   }, []);

    //   useEffect(() => {
    //     if (
    //       loginData?.data?.message?.api_key &&
    //       loginData?.data?.message?.api_secret
    //     ) {
    //       setupNotifications();
    //       setIsLoggedIn(true);
    //     } else {
    //       setIsLoggedIn(false);
    //     }
    //   }, [loginData]);



    return (
        <SafeAreaProvider>
            <NavigationContainer
                theme={lightTheme}
                ref={ref => {
                    navigationRef.current = ref;
                }}
            >
                <GestureHandlerRootView style={{ flex: 1 }}>
                    {/* <BottomSheetModalProvider> */}
                    {/* {isLoggedIn ? <MainNavigator /> : <AuthNavigator />} */}
                    <AuthNavigator />

                    {/* </BottomSheetModalProvider> */}
                </GestureHandlerRootView>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default Navigation;
