import { createAction } from '@reduxjs/toolkit';

interface Props {
  url?: string;
  data?: object;
  method?: string;
  onStart?: string;
  onSuccess?: string;
  onFailed?: string;
  onFileStart?: string;
  onFileSuccess?: string;
  onFileFailed?: string;
  onReset?: string;
  onFileReset?: string;
  onChange?: string;
  formData?: boolean;
  token?: boolean;
  isLogin?: boolean;
  captcha?: boolean;
  sample?: boolean;
  resource?: boolean;
  fileName?: string;
}

// root action creators
export const apiCallBegan = createAction<Props>('api/callBegan');
export const apiCallSuccess = createAction<Props>('api/callSuccess');
export const apiCallFailed = createAction<Props>('api/callFailed');

// root action creators
export const apiFileCallBegan = createAction<Props>('apiFile/callBegan');
export const apiFileCallSuccess = createAction<Props>('apiFile/callSuccess');
export const apiFileCallFailed = createAction<Props>('apiFile/callFailed');
