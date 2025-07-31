import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron
  .configure({ host: '192.168.1.1' }) // Adjust host if using a real device
  .useReactNative() // Add built-in React Native plugins
  .connect(); // Connect to Reactotron app

console.tron = reactotron; // Allows using console.tron.log() for debugging

export default reactotron;
