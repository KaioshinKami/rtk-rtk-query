import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./reducers/UserSlice.ts";
import {userApi} from "../services/UserService.ts";

const rootReducer=combineReducers({
    user:UserSlice,
    [userApi.reducerPath]: userApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(userApi.middleware),
    });
};


export type RootState=ReturnType<typeof rootReducer>
export type AppStore=ReturnType<typeof setupStore>
export type AppDispatch=AppStore['dispatch']