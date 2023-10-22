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
  refreshToken: '',
  heart: []
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
        console.log('action', action);
        const { name = '', email = '', access_Token = '', address = '', phone = '', avatar = '', _id = '',isAdmin, city="",refreshToken = '', heart=[]} = action.payload
        state.name = name ;
        state.email = email;
        state.address = address;
        state.phone = phone;
        state.avatar = avatar;
        state.id = _id;
        state.access_token = access_Token;
        state.isAdmin = isAdmin;
        state.city = city;
        state.refreshToken = refreshToken ? refreshToken : state.refreshToken;
        state.heart = heart
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
      state.refreshToken = ''
      state.heart = []
    },
    addHeart: (state, action) => {
      state.heart.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateUser,resetUser,addHeart } = userSlice.actions

export default userSlice.reducer