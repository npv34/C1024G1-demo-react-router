import {createSlice} from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        userLogin: null,

    },
    reducers: {
        // action
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userLogin = action.payload;
        },

        logout: (state) => {
            state.isLoggedIn = false;
            state.userLogin = null;
        }
    }
})

export const {login, logout} = AuthSlice.actions;

export default AuthSlice.reducer;