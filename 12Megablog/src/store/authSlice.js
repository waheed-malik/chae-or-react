import { createSlice} from "@reduxjs/toolkit";

const initialState={
    status: false,
    userData:null
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducer: { 
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },
        logout: (state)=>{
            state.status=false;
            state.userData=null;
        }
    }
})
export const login = (userData) => ({ type: 'LOGIN', payload: userData });
export const logout = () => ({ type: 'LOGOUT' }); // یہ ہونا چاہیے
export default authSlice.reducer
