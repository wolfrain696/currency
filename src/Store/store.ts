import {configureStore} from "@reduxjs/toolkit";
import TableSlice from "./Reducers/TableSlice";


export const store = configureStore({
    reducer:{
        table : TableSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch