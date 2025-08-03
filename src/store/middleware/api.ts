import axios, { AxiosProgressEvent, ResponseType } from 'axios';
import * as actions from '../apiActions';

// Use a generic type parameter for StoreState type safety
type StoreState = any;

interface ApiMiddlewareArgs {
  dispatch: React.Dispatch<any>;
  getState: () => StoreState;
}

// Define common types for action payloads and request options
interface ApiCallPayload {
  url: string;
  method: string;
  data?: any;
  onStart?: string;
  onSuccess?: string;
  onFailed?: string;
  formData?: boolean;
  isLogin?: boolean;
  token?: boolean;
  resource?: boolean;
  onUploadProgress?: (percentage: number) => void;
}

interface AxiosRequestConfig {
  baseURL?: string;
  url: string;
  method: string;
  data?: any;
  headers?: Record<string, string>;
  responseType?: ResponseType;
  onUploadProgress?: (percentage: AxiosProgressEvent) => void;
}

// Add type annotations for better readability and maintainability
const api =
  ({ dispatch, getState }: ApiMiddlewareArgs) =>
  (next: any) =>
  async (action: any) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const {
      url,
      method,
      data,
      onStart,
      onSuccess,
      onFailed,
      formData = false,
      isLogin = false,
      token,
      resource,
      onUploadProgress,
    }: ApiCallPayload = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);
    try {
      const store = getState();

      if (!url) return null;

      const loginData = store?.login?.data;
      // console.log('loginData===>>', loginData);

      const headers: Record<string, string> = {
        'Content-Type': formData ? 'multipart/form-data' : 'application/json',
        Accept: 'application/json',
      };

      const tokenHeader: Record<string, string> = {
        ...headers,
        Authorization: `Bearer token ${loginData?.token}`,
      };

      const requestConfig: AxiosRequestConfig = {
        baseURL: 'http://3.7.81.243/projects/plie-api/public/api',

        url,
        method,
        data,
        headers: isLogin ? {} : token ? tokenHeader : headers,
        onUploadProgress: progressEvent => {
          if (progressEvent && onUploadProgress) {
            onUploadProgress(
              Math.round(
                (progressEvent.loaded * 100) / (progressEvent?.total || 0),
              ),
            );
          }
        },
      };

      const response = await axios.request(requestConfig);
      // console.log(response);

      dispatch(actions.apiCallSuccess(response.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error: any) {
      const errorMessage =
        (error?.response && error?.response?.data) ||
        error?.response?.data?.message
          ? error?.response?.data
          : error?.message?.includes?.('Network Error')
          ? 'Turn on your internet connection'
          : error?.message || 'Something went wrong, Please try again later';

      dispatch(actions.apiCallFailed(errorMessage));

      if (onFailed) {
        dispatch({
          type: onFailed,
          payload: errorMessage,
        });
      }
    }
  };

export default api;
