import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  avatar: '',
  access_token: '',
  isAdmin: false,
  city: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
        console.log('action', action);
        const { name = '', email = '', access_Token = '', address = '', phone = '', avatar = '', _id = '',isAdmin, city=""} = action.payload
        state.name = name ;
        state.email = email;
        state.address = address;
        state.phone = phone;
        state.avatar = avatar;
        state.id = _id;
        state.access_token = access_Token;
        state.isAdmin = isAdmin;
        state.city = city
    },
    resetUser: (state) => {
      state.name = "";
      state.email = "";
      state.address = "";
      state.phone = "";
      state.avatar = "";
      state.id = "";
      state.access_token = "";
      state.isAdmin = false;
      state.city = "";
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser,resetUser } = userSlice.actions

export default userSlice.reducer