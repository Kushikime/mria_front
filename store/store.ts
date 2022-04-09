import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AppReducer from "./reducers/AppSlice";

//Here we combining all our reducers
const rootReducer = combineReducers({
    AppReducer
})

//Here we setting up and connecting our rootReducer to redux-toolkit
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


// Here we will create the types for:
//     rootReducer
//     dispatch
//     toolkit store

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];