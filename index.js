/**
 * @format
 */
import 'intl-pluralrules';
import 'react-native-gesture-handler';

import './src/assets/locale/i18';

import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
        return null;
    }

    return <App />;
}
AppRegistry.registerComponent(appName, () => HeadlessCheck);
LogBox.ignoreAllLogs();
