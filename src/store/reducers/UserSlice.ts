import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsers } from "../../models/IUser.ts";
import { fetchUsers } from "./ActionCreators.ts";

interface userState {
    users: IUsers[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: userState = {
    users: [],
    isLoading: false,
    error: "",
    count: 0,
};

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
                state.error = "";
            })
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    }
});

export default userSlice.reducer;
