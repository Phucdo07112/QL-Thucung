import axios from "axios"
import { axiosJWT } from "./UserService"
export const getPetByCategory = async(id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/pets/category/${id}`)
    return res.data
}

export const getAllPets = async(search, limit) => {
    let res = {}
    if(search?.length > 0){
        res = await axios.get(`${process.env.REACT_APP_API_URL}/pets/all?filter=name&filter=${search}&limit=${limit}`)
    } else {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/pets/all?limit=${limit}`)
    }
    return res.data
}

export const getAllPetbyId = async(data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/pets/get-heart`, data)
    return res.data
}

export const getPetType = async(type, page, limit) => {
    if(type){
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/pets/get-all?filter=type&filter=${type}&limit=${limit}&page=${page}`)
        return res.data
    } 
}

export const getAllTypePets = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/pets/get-all-type`)
    return res.data
}

export const createPets = async(data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/pets/create`, data)
    return res.data
}

export const getDetailsPets = async(id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/pets/get-details/${id}`)
    return res.data
}

export const updatePets = async(id, access_Token, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/pets/update/${id}`, data, {
        headers: {
            token: `Bearer ${access_Token}`,
        }
    })
    return res.data
}

export const deletePets = async(id,access_Token) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/pets/delete/${id}`, {
        headers: {
            token: `Bearer ${access_Token}`,
        }
    })
    return res.data
}