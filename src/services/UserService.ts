import {BaseQueryArg, createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUsers} from "../models/IUser.ts";
import {build} from "vite";

export const userApi = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5002' }),
    tagTypes:['User'],
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUsers, number>({
            query: (limit = 5) => ({
                url: '/users',
                params:{
                    _limit: limit
                }
            }),
            providesTags:result => ['User']
        }),
        createUsers: build.mutation<IUsers, IUsers>({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body:user
            }),
            invalidatesTags:['User']
        }),
        updateUsers: build.mutation<IUsers, IUsers>({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'PUT',
                body:user
            }),
            invalidatesTags:['User']
        }),
        deleteUsers: build.mutation<IUsers, IUsers>({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'DELETE',
            }),
            invalidatesTags:['User']
        }),
    }),
});

