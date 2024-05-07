import { createSlice } from "@reduxjs/toolkit";

const userReducers = createSlice({
    name : "user",
    initialState : {
        users : [],
        user: null},
    reducers : {
        getUsers : (state,action)=>{
            state.users = action.payload
        },
        deleteUsers : (state,action)=>{
            state.users = [...state.users,action.payload];
        },
        updateData : (state,action)=>{
            state.user =action.payload;
            
        },
        addOneUsers : (state,action) =>{
            state.users = [...state.users, action.payload];
        }
    }
})
export const { getUsers,updateData,deleteUsers,addOneUsers} =userReducers.actions;
export default userReducers.reducer;