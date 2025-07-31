// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <NewAppScreen templateFileName="App.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;



import 'src/assets/locale/i18'
import React, {useEffect} from 'react';
// import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import configureStore from './src/store/configureStore';


const store = configureStore();
const persistor = persistStore(store);
const App = () => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 100);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
        
      </PersistGate>
    </Provider>
  );
};
export default App;