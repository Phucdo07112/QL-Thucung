import axios from "axios"

export const getPetByCategory = async(id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/pets/category/${id}`)
    return res.data
}