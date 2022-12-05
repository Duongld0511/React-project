import { authApi } from './../services/auth';
import { cateApi } from './../services/category';
import { productApi } from './../services/product';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [cateApi.reducerPath]: cateApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware, cateApi.middleware, authApi.middleware),
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;