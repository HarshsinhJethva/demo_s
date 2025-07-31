import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import productList from './common/product';



// combine reducer handler
const reducers = combineReducers({
  productList
});

// root reducer to detect each and every reducer passed by
// handled logout reducer here and empty all the reducers and local storage
const rootReducer = (state: any, action: any) => {
  if (action.type === 'login/reset') {
    AsyncStorage.clear(() => { });
    state = {
      appTheme: state?.appTheme,
      password: state?.password,
      company: state?.company,
    };
  }
  return reducers(state, action);
};

export default rootReducer;
