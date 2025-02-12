import {createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:null,
    isAuthenticated:false,
    token:null
}

const userAuthSlice = createSlice ({
    name:"userAuthSlice",
    initialState,
    reducers:{
        userAuthSuccess:(state,action)=>{
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        userlogout:(state)=>{
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        }
    }
})


export   const {userAuthSuccess, userlogout } = userAuthSlice.actions;

export default userAuthSlice.reducer;