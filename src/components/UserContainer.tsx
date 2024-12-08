import React from 'react';
import {userApi} from "../services/UserService.ts";
import UserItem from "./UserItem.tsx";
import {IUsers} from "../models/IUser.ts";

const UserContainer = () => {
    const {data: users, error, isLoading} = userApi.useFetchAllUsersQuery(13)
    const [createUsers ,{}]=userApi.useCreateUsersMutation()
    const [deleteUser, {}] = userApi.useDeleteUsersMutation()
    const [updateUser, {}] = userApi.useUpdateUsersMutation()

    const handleCreate= async ()=>{
        const name= prompt()
        const email=prompt()
        await createUsers({name, email:email} as IUsers)
    }

    const handleRemove = (user:IUsers) =>{
        deleteUser(user)
    }

    const handleUpdate = (user:IUsers) =>{
        updateUser(user)
    }

    return (
        <div>
            <button onClick={()=>handleCreate()}>Add new User</button>
            {error && "ошибка"}
            {isLoading && <h1>Загрузка</h1>}
            {users && users.map((user)=>
                <UserItem key={user.id} user={user} remove={handleRemove} update={handleUpdate}></UserItem>
            )}
        </div>
    );
};

export default UserContainer;