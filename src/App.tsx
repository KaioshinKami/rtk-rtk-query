import React, {useEffect, useReducer} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import {userSlice} from "./store/reducers/UserSlice.ts";
import {fetchUsers} from "./store/reducers/ActionCreators.ts";
import UserContainer from "./components/UserContainer.tsx";
import UserContainer2 from "./components/UserContainer2.tsx";

const App = () => {
    const dispatch=useAppDispatch();
    const {count}=useAppSelector((state)=>state.user)
    const {increment}=userSlice.actions
    const {isLoading, error, users}=useAppSelector((state)=>state.user)

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            {count}

            <button onClick={()=>dispatch(increment(Number(prompt())))}>increment</button>

            {isLoading && "Loading the users"}
            {error && "Error"}
            {users.map((user)=>
                <div key={user.id}>{user.name}</div>
            )}


            <div style={{display:'flex'}}>
                <UserContainer />
                <UserContainer2 />
            </div>
        </div>
    );
};

export default App;