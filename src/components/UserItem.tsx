import React, {FC} from 'react';
import {IUsers} from "../models/IUser.ts";

interface UserItemProps{
    user:IUsers;
    remove:(user:IUsers)=>void;
    update:(user:IUsers)=>void
}

const UserItem: FC<UserItemProps> = ({user, remove, update}) => {
    const handleRemove=(event:React.MouseEvent)=>{
        event.stopPropagation()
        remove(user)
    }

    const handleUpdate=(event:React.MouseEvent)=>{
        const name=prompt()
        update({...user, name})
    }

    return (
        <div style={{display:'flex', gap:'20px', border:'2px solid green', width:'200px', marginRight:'220px'}}>
            <div onClick={handleUpdate}>
                <p>{user.id} {user.name}</p>
                <p>{user.email}</p>
            </div>
            <div style={{marginTop:'30px'}}>
                <button onClick={handleRemove}>Delete</button>
            </div>
        </div>
    );
};

export default UserItem;