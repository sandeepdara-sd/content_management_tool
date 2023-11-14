import {configureStore, createSlice} from  '@reduxjs/toolkit'


const authSlice = createSlice({
    name:"auth",
    initialState: {
        isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
    },
    reducers:{
        login(state){
            state.isLoggedIn=true
        } ,logout(state) {
            state.isLoggedIn = false
        },
    },
});

export const authActions = authSlice.actions;

export const store = configureStore({
    reducer: {
      auth: authSlice.reducer, // Assuming your authSlice is named 'auth'
    },
  });