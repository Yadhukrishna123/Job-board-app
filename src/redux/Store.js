import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice"
import userAuth from "./userAuth";



const Store = configureStore({
    reducer:{
        jobs:jobSlice,
        user:userAuth,
    }
})
export default Store