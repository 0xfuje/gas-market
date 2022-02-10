import { configureStore } from "@reduxjs/toolkit";
import { debankApiSlice } from "../features/api/debankApiSlice";

const store = configureStore({
    reducer: {
        [debankApiSlice.reducerPath]: debankApiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(debankApiSlice.middleware)
    }
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;