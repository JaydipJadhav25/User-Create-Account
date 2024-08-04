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

export const createUser = createAsyncThunk("createUser" , async(data)=>{
   console.log("user data ala : " , data);
    const userdata = await fetch("https://668411d956e7503d1adf3a99.mockapi.io/api/v1/userform" , {
        method : "POST",
        headers :{
         "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)

    });


    try {
       const result =await userdata.json();
       return result; 

    } catch (error) {
        console.log("error : " , error);
    }
})

export const userSlice = createSlice({
    name : "userdata",
    initialState : {
        loading : false,
        users : [],
        error : false,
        searchData :[],
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

        //user creaete

        builder.addCase(createUser.pending , (state)=>{
        state.loading = true;
        })
        builder.addCase(createUser.fulfilled , (state , action)=>{
            state.users.push(action.payload);
        })
        builder.addCase(createUser.rejected , (state)=>{
            state.error = true;
        })
    },

    //readucer action

    reducers : {
        searchUser : (state , action) =>{
            console.log("user search value : " , action.payload);

            state.searchData  = action.payload;

        } 
    }
    
    
})

// export const{} = userSlice.actions;
export const  {searchUser} = userSlice.actions;
export default userSlice.reducer;