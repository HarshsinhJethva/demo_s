import { apiCallBegan } from '@store/apiActions';
import { apiRoutes, methods } from '@store/apiRoutes';
import createGenericSlice from '@store/types';

interface DataType {
  message: {}[];
}

const slice = createGenericSlice({
  name: 'login',
  initialState: {
    data: undefined as DataType | undefined,
    loading: false,
    error: undefined,
  },
  reducers: {
    requested: state => {
      state.loading = true;
    },
    success: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = undefined;
    },
    failed: (state, action) => {
      state.data = undefined;
      state.loading = false;
      state.error = action.payload;
    },
    reset: state => {
      state.data = undefined;
      state.loading = false;
      state.error = undefined;
    },
  },
});

const { requested, success, failed, reset } = slice.actions;
export default slice.reducer;

export const login = (data: any) => {
  return apiCallBegan({
    url: `${apiRoutes.login}`,
    data,
    method: methods.POST,
    onStart: requested.type,
    onSuccess: success.type,
    onFailed: failed.type,
    formData: true,
  });
};

export const clearLoginResponse = () => {
  return apiCallBegan({ onReset: reset.type });
};
