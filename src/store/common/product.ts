// import { apiCallBegan } from '@store/apiActions';
// import { apiRoutes, methods } from '@store/apiRoutes';
// import createGenericSlice from '@store/types';

import { apiCallBegan } from "../apiActions";
import { apiRoutes, methods } from "../apiRoutes";
import createGenericSlice from "../types";

interface DataType {
    message: {}[];
}

const slice = createGenericSlice({
    name: 'product-list',
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

export const productList = () => {
    return apiCallBegan({
        url: `${apiRoutes.products}`,
        method: methods.GET,
        onStart: requested.type,
        onSuccess: success.type,
        onFailed: failed.type,
    });
};

export const clearproductListResponse = () => {
    return apiCallBegan({ onReset: reset.type });
};
