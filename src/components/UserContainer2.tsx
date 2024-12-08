import React from 'react';
import {userApi} from "../services/UserService.ts";
import UserItem from "./UserItem.tsx";

const UserContainer2 = () => {
    const {data: users, error, isLoading} = userApi.useFetchAllUsersQuery(5)

    return (
        <div>
            {error && "ошибка"}
            {isLoading && <h1>Загрузка</h1>}
            {users && users.map((user)=>
                <UserItem key={user.id} user={user}></UserItem>
            )}
        </div>
    );
};

export default UserContainer2;