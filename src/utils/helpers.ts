import { GenericState } from '@store/types';
import { hasDynamicIsland, hasNotch } from 'react-native-device-info';
import Toast from 'react-native-toast-message';

import {
  Alert,
  Linking,
  Platform,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';
const hasNotchAndHasDynamicIsland: boolean = hasNotch() || hasDynamicIsland();

const listLimit = 10;

const show = {
  success: (text1: string) => {
    Toast.show({
      type: 'success',
      text1,
    });
  },
  error: (text1: string) => {
    Toast.show({
      type: 'error',
      text1,
    });
  },
  warn: (text1: string) => {
    Toast.show({
      type: 'warn',
      text1,
    });
  },
};

// const apiResponseHandler = (
//   response: GenericState<any>,
//   callback?: (response?: object) => void,
// ) => {
//   if (response?.data) {
//     if (response?.data?.message?.error) {
//       callback && callback();
//       show?.error(response?.data?.message?.error);
//     } else if (Array.isArray(response?.data?.message)) {
//       return response?.data?.message?.length > 0 ? response?.data?.message : [];
//     } else {
//       return response?.data?.message || response?.data || false;
//     }
//   }
//   if (response?.error) {
//     if (typeof response?.error === 'string') {
//       show?.error(response?.error);
//     }
//     if (typeof response?.error?.message === 'string') {
//       show?.error(response?.error?.message);
//     }
//     if (typeof response?.error?.message?.message === 'string') {
//       show?.error(response?.error?.message?.message);
//     }
//     if (response?.error?._error_message) {
//       show?.error(response?.error?._error_message);
//       callback && callback(response?.error?._error_message);
//     }
//     if (response?.error?._server_messages) {
//       const err = JSON?.parse?.(response?.error?._server_messages);
//       return callback && callback(err?.message);
//     }
//     if (response?.error?.exception) {
//       show?.error(response?.error?.exception);
//     }
//     callback && callback(response?.error);
//     return false;
//   }

//   return false;
// };

const apiResponseHandler = (
  response: GenericState<any>,
  callback?: (response?: object) => void,
) => {
  if (response) {
    // console.log(response)
    // Dummy JSON APIs usually return clean top-level data
    callback && callback(response);
    return response;
  }

  if (response?.error) {
    const error = response.error;

    // Log or show error messages
    if (typeof error === 'string') {
      show?.error(error);
    } else if (typeof error?.message === 'string') {
      show?.error(error.message);
    } else if (typeof error?.exception === 'string') {
      show?.error(error.exception);
    } else {
      show?.error('Something went wrong');
    }

    callback && callback(error);
    return false;
  }

  return false;
};


const formattedTime = (date: Date, withAmPm: boolean = false) => {
  return date?.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: withAmPm,
  });
};

const formattedTimeHHMM = (date: Date | null | undefined): string => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return 'N/A';
  }
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const fullNameValidation = (name: string): boolean =>
  /^([\w]{3,})+\s+([\w\s]{3,})+$/i.test(name);

const emailValidation = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

const passwordValidation = (password: string): boolean =>
  /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,30}$/.test(
    password,
  );

const mobileNumberValidation = (mobileNumber: string): boolean =>
  /^[6-9]\d{9}$/.test(mobileNumber.trim());

const gstinValidation = (gstin: string): boolean =>
  /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(gstin);

const formateDate = (date: string) => {
  if (!date) return 'N/A';

  const fDate = new Date(date);

  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = fDate.toLocaleDateString('en-US', options);
  return formattedDate;
};

const formateFullDate = (date: string) => {
  if (!date) return 'N/A';

  const fDate = new Date(date);

  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  const formattedDate = fDate.toLocaleDateString('en-US', options);
  return formattedDate;
};

const formateMMYY = (date: string, long: boolean = false) => {
  if (!date) return 'N/A';

  const fDate = new Date(date);

  const formattedDate = fDate
    .toLocaleDateString('en-US', {
      month: long ? 'long' : 'short',
      year: 'numeric',
    })
    .replace(' ', ', ');
  return formattedDate;
};

const formateDateDDMMM = (date: string) => {
  if (!date) return 'N/A';

  const fDate = new Date(date);

  const day = fDate.getUTCDate();
  const month = fDate.toLocaleString('en-US', {
    month: 'long',
    timeZone: 'UTC',
  });

  const formattedDate = `${day} ${month}`;
  return formattedDate;
};

const formateYYYYMMDD = (date: string) => {
  if (!date) return 'N/A';

  const fDate = new Date(date);

  const formattedDate = fDate.toISOString().split('T')[0];
  return formattedDate;
};

const formateMMMDD = (date: string) => {
  if (!date) return 'N/A';

  const fDate = new Date(date);

  const formattedDate = fDate.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
  });
  return formattedDate;
};

const formatDDMMYYYY = (date: string) => {
  if (!date) return 'N/A';

  const fDate = new Date(date);

  const day = String(fDate.getDate()).padStart(2, '0');
  const month = String(fDate.getMonth() + 1).padStart(2, '0');
  const year = fDate.getFullYear();

  return `${day}-${month}-${year}`;
};

const formateDayTime = (dateInput: string) => {
  const date = new Date(dateInput);
  const now = new Date();

  if (isNaN(date.getTime())) {
    return;
  }

  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

  if (diffDays === 0) {
    return `Today | ${formattedTime}`;
  } else if (diffDays === 1) {
    return `Yesterday | ${formattedTime}`;
  } else {
    const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-CA', dateOptions);
    return `${formattedDate} | ${formattedTime}`;
  }
};

const requestLocationPermission = async () => {
  try {
    const permissionType =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

    const result = await request(permissionType);

    if (result === RESULTS.GRANTED) {
      return true;
    } else {
      Alert.alert(
        'Location Permission Required',
        'Please grant location access to use this feature.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Open Settings', onPress: () => openSettings() },
        ],
      );
    }
  } catch (err) {
    show.warn('Allow location to Check-in/Check-out');
    return false;
  }
};

const promptToEnableLocationServices = (
  title?: string,
  description?: string,
) => {
  Alert.alert(
    title && title !== '' ? title : 'Enable Location Services',
    description && description !== ''
      ? description
      : 'Your location services (GPS) are currently turned off. Would you like to enable them?',
    [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Open Settings',
        onPress: () => {
          if (Platform.OS === 'android') {
            Linking.openSettings();
          } else {
            Linking.openURL('app-settings:');
          }
        },
      },
    ],
  );
};


const debounce = (func, delay = 500) => {
  let timeoutId;

  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};






const isInternetConnected = async () => {
  try {
    const state = await NetInfo.fetch();
    return state.isConnected;
  } catch (error) {
    console.error('Error checking internet connection:', error);
    return false;
  }
};







const capitalize = (str: string) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};







export default {
  formattedTime,
  formattedTimeHHMM,
  fullNameValidation,
  emailValidation,
  passwordValidation,
  mobileNumberValidation,
  gstinValidation,
  apiResponseHandler,
  formateDate,
  formateFullDate,
  formateMMYY,
  formateDateDDMMM,
  formateYYYYMMDD,
  formateMMMDD,
  formatDDMMYYYY,
  formateDayTime,

  hasNotchAndHasDynamicIsland,
  show,
  listLimit,
  requestLocationPermission,
  promptToEnableLocationServices,
  debounce,
  isInternetConnected,
  capitalize,
};
