import axios from 'axios'

export const axiosJWT = axios.create() // khoi tao axiosJWT danh rieng cho interceptors để kiểm tra access_Token hết hạn
export const loginUser = async(data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-in`, data)
    return res.data
}

export const signUpUser = async(data) => {
    console.log('process.env.REACT_APP_API_URL',process.env);

    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-up`, data)
    return res.data
}

export const getDetailUser = async (id, access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/user/get-details/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getAllUser = async (access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/user/getAll`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteUser = async (id, access_token) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/user/delete-user/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteManyUser = async (data, access_token,) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/user/delete-many`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const refreshToken = async() => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/refresh-token`, {
        withCredentials: true, // khi co cookie thi tu dong lay cookie truyen xuong backend
        credentials: 'include'
    })
    return res.data
}

export const logoutUser = async() => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/log-out`)
    return res.data
}

export const updateUser = async(id, access_token, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/user/update-user/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}