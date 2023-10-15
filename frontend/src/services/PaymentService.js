import axios from "axios"

export const getConfig = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/payment/config`)
  return res.data
}