import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk("getUsers" , async()=>{
   try {
    
    const data = await fetch("https://668411d956e7503d1adf3a99.mockapi.io/api/v1/userform");
    const users = await data.json();
    console.log("user data:  " , users);
    return users;
   } catch (error) {
    console.log("data fetching error: " , error);
    
   }
})


export const userSlice = createSlice({
    name : "userdata",
    initialState : {
        loading : false,
        users : [],
        error : false
    },

    extraReducers : (builder) =>{
        //All Users
        builder.addCase(getUsers.pending , (state)=>{
            state.loading = true;
        })

        builder.addCase(getUsers.rejected , (state) =>{
            state.error = true;
        })
        builder.addCase(getUsers.fulfilled , (state , action)=>{
            state.loading = false;
            state.users = action.payload;
            state.error = false;
        })
    }
    
    
})

// export const{} = userSlice.actions;
export default userSlice.reducer;