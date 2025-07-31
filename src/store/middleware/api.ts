// import axios, { AxiosProgressEvent, ResponseType } from 'axios';
// import * as actions from '../apiActions';

// // Use a generic type parameter for StoreState type safety
// type StoreState = any;

// interface ApiMiddlewareArgs {
//   dispatch: React.Dispatch<any>;
//   getState: () => StoreState;
// }

// // Define common types for action payloads and request options
// interface ApiCallPayload {
//   url: string;
//   method: string;
//   data?: any;
//   onStart?: string;
//   onSuccess?: string;
//   onFailed?: string;
//   formData?: boolean;
//   isLogin?: boolean;
//   token?: boolean;
//   resource?: boolean;
//   onUploadProgress?: (percentage: number) => void;
// }

// interface AxiosRequestConfig {
//   baseURL?: string;
//   url: string;
//   method: string;
//   data?: any;
//   headers?: Record<string, string>;
//   responseType?: ResponseType;
//   onUploadProgress?: (percentage: AxiosProgressEvent) => void;
// }

// // Add type annotations for better readability and maintainability
// const api =
//   ({ dispatch, getState }: ApiMiddlewareArgs) =>
//   (next: any) =>
//   async (action: any) => {
//     if (action.type !== actions.apiCallBegan.type) return next(action);

//     const {
//       url,
//       method,
//       data,
//       onStart,
//       onSuccess,
//       onFailed,
//       formData = false,
//       isLogin = false,
//       token,
//       resource,
//       onUploadProgress,
//     }: ApiCallPayload = action.payload;

//     if (onStart) dispatch({ type: onStart });
//     next(action);
//     try {
//       const store = getState();

//       if (!url) return null;

//       const loginData = store?.login?.data?.message;
//       const company = store?.company?.data;

//       const headers: Record<string, string> = {
//         'Content-Type': formData ? 'multipart/form-data' : 'application/json',
//         Accept: 'application/json',
//       };

//       const tokenHeader: Record<string, string> = {
//         ...headers,
//         Authorization: `Bearer token ${loginData?.api_key}:${loginData?.api_secret}`,
//       };

//       const requestConfig: AxiosRequestConfig = {
//         baseURL: company?.instance
//           ? resource
//             ? `${company?.instance}/api`
//             : `${company?.instance}/api/method`
//           : process.env.URL,
//         // baseURL: 'http://192.168.1.25:8009/api/method',
//         url,
//         method,
//         data,
//         headers: isLogin ? {} : token ? tokenHeader : headers,
//         onUploadProgress: progressEvent => {
//           if (progressEvent && onUploadProgress) {
//             onUploadProgress(
//               Math.round(
//                 (progressEvent.loaded * 100) / (progressEvent?.total || 0),
//               ),
//             );
//           }
//         },
//       };

//       const response = await axios.request(requestConfig);

//       dispatch(actions.apiCallSuccess(response.data));
//       if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
//     } catch (error: any) {
//       const errorMessage =
//         (error?.response && error?.response?.data) ||
//         error?.response?.data?.message
//           ? error?.response?.data
//           : error?.message?.includes?.('Network Error')
//           ? 'Turn on your internet connection'
//           : error?.message || 'Something went wrong, Please try again later';

//       dispatch(actions.apiCallFailed(errorMessage));

//       if (onFailed) {
//         dispatch({
//           type: onFailed,
//           payload: errorMessage,
//         });
//       }
//     }
//   };

// export default api;

// src/middleware/apiDummy.ts
import axios, { AxiosRequestConfig, AxiosProgressEvent } from 'axios';
import * as actions from '../apiActions';

interface ApiMiddlewareArgs {
  dispatch: React.Dispatch<any>;
  getState: () => any;
}

interface ApiCallPayload {
  url: string;
  method: string;
  data?: any;
  onStart?: string;
  onSuccess?: string;
  onFailed?: string;
  onUploadProgress?: (percentage: number) => void;
}

const apiDummy =
  ({ dispatch }: ApiMiddlewareArgs) =>
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
      onUploadProgress,
    }: ApiCallPayload = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const config: AxiosRequestConfig = {
        baseURL: 'https://dummyjson.com',
        url,
        method,
        data,
        headers: {
          'Content-Type': 'application/json',
        },
        onUploadProgress: progressEvent => {
          if (onUploadProgress) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total || 1)
            );
            onUploadProgress(percentCompleted);
          }
        },
      };

      const response = await axios.request(config);
      dispatch(actions.apiCallSuccess(response.data));
      if (onSuccess)
        dispatch({ type: onSuccess, payload: response.data });
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || 'Something went wrong!';
      dispatch(actions.apiCallFailed(errorMessage));
      if (onFailed)
        dispatch({ type: onFailed, payload: errorMessage });
    }
  };

export default apiDummy;
