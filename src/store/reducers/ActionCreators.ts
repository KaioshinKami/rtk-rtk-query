import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
import {IUsers} from "../../models/IUser.ts";

export const fetchUsers=createAsyncThunk(
    'users/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (error: string) {
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
        }
    }

)